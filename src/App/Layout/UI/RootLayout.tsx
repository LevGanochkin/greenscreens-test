import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styled";
import { Navigation } from "@/Widgets/Navigation";
import { AppThemeProvider } from "@/App/Providers/Theme/ThemeProvider";
import { AppContextProvider } from "@/App/Providers/Context/ContextProvider";

export function RootLayout() {
    return (
        <AppThemeProvider>
            <AppContextProvider>
                <Navigation />
                <LayoutContainer maxWidth={false} disableGutters>
                    <Outlet />
                </LayoutContainer>
            </AppContextProvider>
        </AppThemeProvider>
    );
}
