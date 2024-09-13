import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface PaletteColor {
        lightMedium?: string;
        lightPale?: string;
    }

    interface SimplePaletteColorOptions {
        lightMedium?: string;
        lightPale?: string;
    }
    interface TypeBackground {
        backBody?: string;
        backElem?: string;
        borderLight?: string;
        borderDark?: string;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#00A757",
            dark: "#006E39",
            light: "#66CA9A",
            lightMedium: "#99DCBC",
            lightPale: "#CCEDDD",
        },
        secondary: {
            main: "#008CFF",
            dark: "#005CAB",
            light: "#66B8FF",
            lightMedium: "#99D1FF",
            lightPale: "#CCE9FF",
        },
        info: {
            main: "#d1e429",
        },
        text: {
            primary: "#1A1A1A",
            secondary: "#656565",
            disabled: "#A1A1A1",
        },
        background: {
            default: "white",
            backBody: "#F5F6F7",
            backElem: "#656565",
            borderLight: "#E4E4E4",
            borderDark: "#C7C7C7",
        },
        divider: "#E4E4E4",
    },
    typography: {
        fontFamily: "Poppins",
        h4: {
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: "1.5em",
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: "600",
            lineHeight: "2rem",
        },
        body1: {
            fontSize: "0.9375rem",
            lineHeight: "1.5rem",
        },
        body2: {
            fontSize: "0.75rem",
            lineHeight: "1.5rem",
        },
        caption: {
            fontSize: "0.625rem",
            lineHeight: "1rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
        },
    },
});
