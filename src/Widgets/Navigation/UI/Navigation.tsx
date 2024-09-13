import { Divider, Stack, Toolbar } from "@mui/material";
import logo from "@/Shared/Assets/logo.svg";
import { NavigationBar, NavTabs, NavTab, CustomAvatar } from "./styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(location.pathname);

    function handleChange(_event: React.SyntheticEvent, newValue: string) {
        setValue(newValue);
        navigate(newValue);
    }

    return (
        <NavigationBar>
            <Toolbar disableGutters>
                <img src={logo} />
                <Stack direction="row" gap={"31px"} marginLeft={"27px"} flexGrow={1}>
                    <Divider orientation="vertical" flexItem />
                    <NavTabs value={value} onChange={handleChange} aria-label="nav tabs" role="navigation">
                        <NavTab label="Rates" value={"/rates"} />
                        <NavTab label="Pricing" value={"/"} />
                        <NavTab label="Bids" value={"/bids"} />
                        <NavTab label="Insights" value={"/insights"} />
                        <NavTab label="Batch" value={"/batch"} />
                    </NavTabs>
                </Stack>
                <Stack direction="row" gap={"24px"}>
                    <CustomAvatar className="info">?</CustomAvatar>
                    <CustomAvatar className="account">db</CustomAvatar>
                </Stack>
            </Toolbar>
        </NavigationBar>
    );
}
