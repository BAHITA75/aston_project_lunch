import { Meal } from "./meal";
import { Menu } from "./menu";
import { User } from "./user";

export interface Quantity {
    "id": number,
    "quantity": number,
    "meal": Meal,
    "menu": Menu,
}

export interface Order {
    "id": number,
    "creationDate": string,
    "creationTime": string,
    "status": 0,
    "user": User,
    "quantity": Quantity[]
}

