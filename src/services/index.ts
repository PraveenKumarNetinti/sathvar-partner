import { api } from "@/axios.config";
import { queryOptions } from "@tanstack/react-query";

import { UserProfileResponse } from "./types";

const services = {
  queries: {
    getProfileQueryOptions: () =>
      queryOptions({
        queryKey: ["user", "profile"],
        queryFn: () =>
          api.get<void, UserProfileResponse>("/get-user-profile-details"),
      }),
  },
  mutations: {},
};

export default services;
