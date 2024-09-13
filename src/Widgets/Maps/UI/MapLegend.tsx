import { Stack, Typography } from "@mui/material";
import { LegendBullet } from "./styled";
import { legend } from "@/Shared/Utils/legend";

export function MapLegend({ prefix }: { prefix: "primary" | "secondary" }) {
    return (
        <Stack direction={"row"} gap={"16px"}>
            {legend.map((elem, index) => (
                <Stack direction={"row"} key={index} alignItems={"center"} gap={"8px"}>
                    <LegendBullet prefix={prefix} bgcolor={elem.color} />
                    <Typography variant="body2">{elem.text}</Typography>
                </Stack>
            ))}
        </Stack>
    );
}
