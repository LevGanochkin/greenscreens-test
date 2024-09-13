import { FormControl, MenuItem, Select, styled } from "@mui/material";

const SelectControl = styled(FormControl)(({}) => ({
    gap: "4px",
    width: 160,
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    fontSize: "0.875rem",
    textTransform: "capitalize",

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.background.borderDark,
    },
}));

const SelectItem = styled(MenuItem)(({}) => ({
    textTransform: "capitalize",
}));

export { SelectControl, CustomSelect, SelectItem };
