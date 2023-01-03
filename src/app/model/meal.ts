import { Ingredients } from "./ingredients";

export class Meal {
    id?: number;
    description?: string;
    label?: string;
    status?: number;
    imageId?: string;
    priceDF?: string;
    category?: Array<number>;
    ingredients?: Ingredients;
}