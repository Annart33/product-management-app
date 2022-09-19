import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CustomResponse } from '../shared/CustomResponse';
import { StatusCodes } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  dbName: string = "Products";

  constructor() { }

  getProducts(): Promise<CustomResponse> {
    return new Promise<CustomResponse>((resolve, reject) => {
      setTimeout(() => {
        const products = localStorage.getItem(this.dbName);
        products ? resolve(new CustomResponse(StatusCodes.Success, JSON.parse(products))) : reject(new CustomResponse(StatusCodes.NotFound, "No products found"));
      }, 1000);
    });
  }

  setProducts(products: Array<Product>): Promise<CustomResponse> {
    return new Promise<CustomResponse>((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem(this.dbName, JSON.stringify(products));
        products ? resolve(new CustomResponse(StatusCodes.Success, "Success")) : reject(new CustomResponse(StatusCodes.BadRequest, "Products were not saved"));
      }, 1000);
    });
  }
}
