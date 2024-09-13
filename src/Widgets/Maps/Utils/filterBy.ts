import { FilterType, StateType } from "@/Shared/Types";

export function filterBy(states: StateType[], filter: FilterType) {
    if (filter === "all") {
        return states;
    }

    const newData: StateType[] = states.map((elem) => ({
        ...elem,
        population: elem.population ? elem.population + 500000 : elem.population - 500000,
    }));

    return newData;
}
