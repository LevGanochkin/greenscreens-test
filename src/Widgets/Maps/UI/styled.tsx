import { ColorName } from "@/Shared/Types";
import { Avatar, Paper, PaperProps, styled } from "@mui/material";

const MapContainer = styled((props: PaperProps) => <Paper elevation={0} {...props} />)(({ theme }) => ({
    width: 640,
    height: 384,
    border: `1px solid ${theme.palette.background.borderLight}`,
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 24px 24px 32px",
}));

const LegendBullet = styled(Avatar)<{ prefix: "primary" | "secondary"; bgcolor: ColorName }>(
    ({ theme, prefix, bgcolor }) => ({
        backgroundColor: prefix === "primary" ? theme.palette.primary[bgcolor] : theme.palette.secondary[bgcolor],
        color: prefix === "primary" ? theme.palette.primary[bgcolor] : theme.palette.secondary[bgcolor],
        width: "8px",
        height: "8px",
        borderRadius: "4px",
    }),
);

export { MapContainer, LegendBullet };
