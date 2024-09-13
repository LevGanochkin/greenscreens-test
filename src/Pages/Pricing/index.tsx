import { FiltersWidget } from "@/Widgets/Filters";
import { MapWidget } from "@/Widgets/Maps";
import { Stack, Typography } from "@mui/material";

export function PricingPage() {
    return (
        <>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="h4">Strategic Pricing</Typography>
            </Stack>
            <FiltersWidget />
            <MapWidget />
        </>
    );
}
