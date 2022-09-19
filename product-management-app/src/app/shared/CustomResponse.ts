import { Product } from "src/app/models/product";
import { StatusCodes } from "./enums";

export class CustomResponse {
    public constructor(
        public statusCode: StatusCodes,
        public message: Array<Product> | string,
    ) { }
}
