import { Meal } from "./meal";

export class Menu {
    id?: number;
    label?: string;
    status?: number;
    imageId?: string;
    priceDF?: string;
    availableForWeeksAndDays?: string;
    meals?: Meal;
}