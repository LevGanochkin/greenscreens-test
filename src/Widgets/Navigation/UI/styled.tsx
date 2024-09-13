import { AppBar, AppBarProps, Avatar, styled, Tab, Tabs } from "@mui/material";

const NavigationBar = styled((props: AppBarProps) => (
    <AppBar color="inherit" elevation={0} position="relative" {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.background.borderLight}`,
    padding: "0 64px",
}));

const NavTabs = styled(Tabs)(({}) => ({
    minHeight: "24px",

    "& .MuiTabs-indicator": {
        display: "none",
    },
    "& .MuiTabs-flexContainer": {
        gap: "32px",
    },
}));

const NavTab = styled(Tab)(({}) => ({
    padding: 0,
    minHeight: "fit-content",
    minWidth: "fit-content",
    fontSize: "0.9375rem",
    lineHeight: "1.6em",
    textTransform: "capitalize",
}));

const CustomAvatar = styled(Avatar)(({ theme, className }) => ({
    width: "24px",
    height: "24px",
    backgroundColor: theme.palette.background.backElem,
    fontSize: className === "account" ? "0.75rem" : "1.25rem",
    fontWeight: className === "account" ? 600 : "inherit",
}));

export { NavigationBar, NavTabs, NavTab, CustomAvatar };
