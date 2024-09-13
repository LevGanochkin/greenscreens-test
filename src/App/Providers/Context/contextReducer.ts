import { ContextActionState, ContextState } from "@/Shared/Types";

export const reducer = (state: ContextState, action: ContextActionState): ContextState => {
    switch (action.type) {
        case "SET_FILTER_USER":
            return {
                ...state,
                filterUser: action.filterUser,
            };
        case "SET_FILTER_TRANSPORT":
            return {
                ...state,
                filterTransport: action.filterTransport,
            };
        case "RESET":
            return {
                filterUser: "all",
                filterTransport: "all",
            };
        default:
            return state;
    }
};
