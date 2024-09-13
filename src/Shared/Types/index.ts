type ColorName = "lightPale" | "lightMedium" | "light" | "dark" | "main";
type LegendType = { text: string; color: ColorName };

type UserType = "all" | "registered";
type TransportType = "all" | "plane" | "truck";

type FilterType = UserType | TransportType;

type StateType = {
    code: string;
    name: string;
    population: number;
    d: string;
};

type ContextState = {
    filterUser: UserType;
    filterTransport: TransportType;
};

type ContextActionState = { type: string } & ContextState;

type ContextType = {
    state: ContextState;
    dispatch: React.Dispatch<ContextActionState>;
};

export {
    ColorName,
    LegendType,
    StateType,
    UserType,
    FilterType,
    TransportType,
    ContextState,
    ContextActionState,
    ContextType,
};
