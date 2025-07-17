import axios from "axios";

import { storage } from "@/utils";

import { notification } from "@/hooks/use-notification";

let baseURL = `${window.location.origin}/api`;

if (import.meta.env.DEV) {
  baseURL = import.meta.env.VITE_BASE_URL;
}

const api = axios.create({
  baseURL,
  timeout: 5000,
});

// Request interceptor:
api.interceptors.request.use(
  function (config) {
    const token = storage.getItem("auth-token");
    const organisation = storage.getItem("organisation") as { id: any };

    if (token)
      config.headers.set({
        Authorization: `Bearer ${token}`,
        organization: organisation?.id,
      });

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
api.interceptors.response.use(
  function (response) {
    const data = response?.data;
    const success = data?.success;

    switch (success) {
      case "0": {
        notification({
          title: data?.code ? `Code: ${data.code}` : "Error",
          description: data?.message || "Something went wrong",
          variant: "filled",
          status: "error",
        });
        return Promise.reject(new Error(data?.message || "Unknown error"));
      }

      case "1": {
        if (response?.config?.method === "post") {
          notification({
            title: data?.message,
            variant: "filled",
            status: "success",
          });
        }
        return data;
      }

      case "3": {
        // Session expired: clear auth and redirect if needed
        storage.removeItem("auth-token");
        storage.removeItem("organisation");

        notification({
          title: "Session Expired",
          description: "Your session has expired. Please log in again.",
          variant: "filled",
          status: "error",
        });

        return Promise.reject(new Error("Session expired"));
      }

      default:
        return data;
    }
  },
  function (error) {
    console.log(error);
    let title = error?.code || "Error";
    let description = error?.message || "Something went wrong";

    // Network timeout
    if (error.code === "ECONNABORTED") {
      title = "Request Timed Out";
      description = "The server took too long to respond.";
    }

    // Request canceled
    if (error.name === "CanceledError") {
      title = "Request Cancelled";
      description = "The request was canceled by the client.";
    }

    notification({
      title,
      description,
      variant: "filled",
      status: "error",
    });

    // Server response with known format
    if (error?.response?.data?.success) {
      return error.response.data;
    }

    return Promise.reject(error);
  },
);

export { api };
