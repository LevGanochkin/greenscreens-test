import { AppContext } from "@/App/Providers/Context/ContextProvider";
import { useContext } from "react";

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("invalid useAppContext");
    }
    return context;
}
