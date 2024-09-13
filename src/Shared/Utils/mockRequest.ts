import { FilterType, StateType } from "../Types";
import { populationPerState } from "./populationPerState";

export function mockRequest(data: FilterType[], shouldReject: boolean = false): Promise<StateType[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(new Error(`Ошибка при выполнении запроса c ${data}`));
            } else {
                resolve(populationPerState);
            }
        }, 2000);
    });
}
