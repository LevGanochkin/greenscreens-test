import { CircularProgress, Stack, Typography } from "@mui/material";
import { MapContainer } from "./styled";
import { MapLegend } from "./MapLegend";
import { InteractiveMap } from "@/Features/Map";
import { useMockFetch } from "@/Shared/Hooks/useMockFetch";

export function MapWidget() {
    const { mapsData, inProgress, error } = useMockFetch();

    return (
        <Stack direction={"row"} justifyContent={"space-between"}>
            <MapContainer>
                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1">Win Rate %</Typography>
                </Stack>
                {inProgress && <CircularProgress />}
                {error && <Typography color="error">{error.message}</Typography>}
                {mapsData?.left && <InteractiveMap side="left" mapData={mapsData.left} />}
                <MapLegend prefix="primary" />
            </MapContainer>
            <MapContainer>
                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1">Est. Margin %</Typography>
                </Stack>
                {inProgress && <CircularProgress color="secondary" />}
                {error && <Typography color="error">{error.message}</Typography>}
                {mapsData?.left && <InteractiveMap side="right" mapData={mapsData.right} />}
                <MapLegend prefix="secondary" />
            </MapContainer>
        </Stack>
    );
}
