import { styled } from "@mui/material";

const USState = styled("path")(({ theme }) => ({
    "&:hover": {
        fill: theme.palette.info.main,
    },
}));

export { USState };
