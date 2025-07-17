import * as React from "react";

import { useObjectState } from "@/hooks";

export type AuthContext = {
  user: Record<string, unknown>;
  login: {
    email: string;
    password: string;
    otp: string;
    order_id: string;
  };
  setAuth: (args: any) => void;
};

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useObjectState({
    user: {},
    login: {
      email: "",
      password: "",
      otp: "",
      order_id: "",
    },
  });

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
