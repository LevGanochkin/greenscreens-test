import { useTheme } from "@mui/material";

export function useColor(statisticNumber: number, side: "left" | "right") {
    const { palette } = useTheme();
    const colorPrefix = side === "left" ? palette.primary : palette.secondary;

    if (statisticNumber < 1000000) {
        return colorPrefix.lightPale;
    }
    if (statisticNumber > 1000000 && statisticNumber < 3000000) {
        return colorPrefix.lightMedium;
    }
    if (statisticNumber > 3000000 && statisticNumber < 5000000) {
        return colorPrefix.lightPale;
    }
    if (statisticNumber > 5000000 && statisticNumber < 7000000) {
        return colorPrefix.main;
    }
    if (statisticNumber > 7000000) {
        return colorPrefix.dark;
    }
}
