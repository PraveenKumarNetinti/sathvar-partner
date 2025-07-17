import React from "react";

import { createContext } from "@/utils/react-utils/context";
import { setHTMLDataAttribute } from "@/utils/setHTMLDataAttribute";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const [ThemeContextProvider, useTheme] = createContext<ThemeProviderState>(
  initialState,
  {
    name: "ThemeContext",
  },
);

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "data-mode",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      setHTMLDataAttribute("data-mode", systemTheme);
      return;
    }

    root.classList.add(theme);
    setHTMLDataAttribute("data-mode", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContextProvider {...props} value={value}>
      {children}
    </ThemeContextProvider>
  );
}

export { ThemeContextProvider, ThemeProvider, useTheme };
