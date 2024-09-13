import { SelectChangeEvent, Stack } from "@mui/material";
import { FiltersContainer, ResetButton } from "./styled";
import { SelectSmall } from "@/Shared/UI/Select";
import { transportTypes, users } from "@/Shared/Utils/filterData";
import { TransportType, UserType } from "@/Shared/Types";
import { useAppContext } from "@/Shared/Hooks/useAppContext";

export function FiltersWidget() {
    const { state, dispatch } = useAppContext();

    function handleChangeFilter(event: SelectChangeEvent<unknown>) {
        if (event.target.name === "user") {
            dispatch({
                ...state,
                type: "SET_FILTER_USER",
                filterUser: event.target.value as UserType,
            });
        } else {
            dispatch({
                ...state,
                type: "SET_FILTER_TRANSPORT",
                filterTransport: event.target.value as TransportType,
            });
        }
    }

    function resetFilters() {
        dispatch({
            ...state,
            type: "RESET",
        });
    }

    return (
        <FiltersContainer>
            <Stack direction={"row"} gap={"16px"}>
                <SelectSmall
                    label="transport type"
                    data={transportTypes}
                    filterValue={state.filterTransport}
                    handlChange={handleChangeFilter}
                />
                <SelectSmall
                    label="user"
                    data={users}
                    filterValue={state.filterUser}
                    handlChange={handleChangeFilter}
                />
            </Stack>
            <ResetButton variant="text" color="inherit" onClick={resetFilters}>
                Reset all filters
            </ResetButton>
        </FiltersContainer>
    );
}
