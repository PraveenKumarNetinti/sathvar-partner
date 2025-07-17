import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import "./styles/index.css";

import { AuthProvider, useAuth } from "./context/auth";
import { queryClient, router } from "./router";

function App() {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>,
  );
}
