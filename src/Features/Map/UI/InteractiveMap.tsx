import { Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { USState } from "./styled";
import { useColor } from "@/Shared/Hooks/useColor";
import { StateType } from "@/Shared/Types";

export function InteractiveMap({ mapData, side }: { mapData: StateType[]; side: "left" | "right" }) {
    const [tooltipData, setTooltipData] = useState<{ name: string; population: number } | null>(null);

    const handleMouseEnter = (state: { name: string; population: number }) => {
        setTooltipData(state);
    };

    const handleMouseLeave = () => {
        setTooltipData(null);
    };

    return (
        <div style={{ width: "454px", height: "261px" }}>
            {mapData.length > 0 ? (
                <svg viewBox="0 0 959 593" width={"100%"} height={"100%"}>
                    {mapData.map((elem) => (
                        <Tooltip
                            key={elem.code}
                            open={tooltipData?.name === elem.name}
                            title={`${elem.name}: ${elem.population.toLocaleString()}`}
                            arrow>
                            <USState
                                id={elem.code}
                                d={elem.d}
                                fill={useColor(elem.population, side)}
                                stroke="white"
                                strokeWidth="2"
                                onMouseEnter={() => handleMouseEnter(elem)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </Tooltip>
                    ))}
                </svg>
            ) : (
                <Typography color="error">Sorry, there is no such data</Typography>
            )}
        </div>
    );
}
