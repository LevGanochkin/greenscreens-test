import { SelectChangeEvent, Typography } from "@mui/material";
import { CustomSelect, SelectControl, SelectItem } from "./styled";
import { FilterType } from "@/Shared/Types";

export function SelectSmall({
    label,
    data,
    filterValue,
    handlChange,
}: {
    label: string;
    data: FilterType[];
    filterValue: FilterType;
    handlChange: (arg: SelectChangeEvent<unknown>) => void;
}) {
    return (
        <SelectControl size="small">
            <Typography variant="caption" color="text.secondary">
                {label}
            </Typography>
            <CustomSelect id="demo-select-small" name={label} value={filterValue} onChange={handlChange}>
                {data.map((elem, index) => (
                    <SelectItem key={index} value={elem}>
                        {elem}
                    </SelectItem>
                ))}
            </CustomSelect>
        </SelectControl>
    );
}
