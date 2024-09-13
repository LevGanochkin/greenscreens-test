import { useEffect, useState } from "react";
import { mockRequest } from "../Utils/mockRequest";
import { useAppContext } from "./useAppContext";
import { StateType } from "../Types";

export function useMockFetch() {
    const { state } = useAppContext();
    const [mapsData, setMapsData] = useState<{ left: StateType[]; right: StateType[] } | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [inProgress, setInProgress] = useState<boolean | null>(null);
    const { filterTransport, filterUser } = state;

    useEffect(() => {
        setMapsData(null);
        setInProgress(true);
        mockRequest([filterTransport, filterUser])
            .then((res) => {
                setMapsData({ left: res, right: res });
            })
            .catch((error) => {
                setError(new Error(error));
            })
            .finally(() => setInProgress(false));
    }, [filterTransport, filterUser]);

    return { mapsData, error, inProgress };
}
