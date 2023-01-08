import { Quantity } from "./quantity";
import { User } from "./user";

export class Order {
    id?: number;
    creationDate?: string;
    creationTime?: object;
    status?: number;
    user?: User;
    quantity?: Array<Quantity>;
}