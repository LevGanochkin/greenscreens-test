import { ContextState, ContextType } from "@/Shared/Types";
import { createContext, useReducer } from "react";
import { reducer } from "./contextReducer";

const initialState: ContextState = {
    filterUser: "all",
    filterTransport: "all",
};

export const AppContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
