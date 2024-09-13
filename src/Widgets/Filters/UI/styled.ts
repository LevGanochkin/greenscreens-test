import { Button, Stack, styled } from "@mui/material";

const FiltersContainer = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "4px",
    padding: "30px",
    backgroundColor: theme.palette.background.default,
}));

const ResetButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.disabled,
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "initial",
}));

export { FiltersContainer, ResetButton };
