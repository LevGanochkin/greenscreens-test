import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export function AppThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
