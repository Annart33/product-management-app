import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { StatusCodes } from '../shared/enums';
import { StorageManagerService } from './storage-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private storageManagerService: StorageManagerService) {
    //Only for a non-empty db simulation - initialization for a starting point
    const prodsInDB: Array<Product> = [
      new Product(0, "Scarface", "Action film - CD", 5),
      new Product(1, "Scent of a woman", "Drama film - CD", 4),
      new Product(2, "James Bond - Dr. No", "Action film - CD", 3),
      new Product(3, "Breakfast at Tiffany's", "Romantic comedy - CD", 2),
    ]
    this.storageManagerService.setProducts(prodsInDB);
  }

  async getAllProducts(): Promise<Array<Product>> {
    const res = await this.storageManagerService.getProducts();
    if (res.statusCode == StatusCodes.NotFound) return [];
    return res.message as Product[];
  }

  async getProductByName(name: string): Promise<Array<Product> | null> {
    let result = null;
    const prods = await this.getAllProducts();
    prods?.forEach(prod => {
      if (prod.name == name) result = prod;
    });
    return result;
  }

  async addProduct(product: Product): Promise<void> {
    const prods = await this.getAllProducts(); 
    product.id = prods.length;
    if (prods) {
      prods.push(product);
      this.storageManagerService.setProducts(prods);
    }
  }

  async updateProduct(id: number, name?: string, desc?: string, price?: number): Promise<void> {
    const prods = await this.getAllProducts();
    if (prods) {
      if (name) prods[id].name = name;
      if (desc) prods[id].description = desc;
      if (price) prods[id].price = price;
      this.storageManagerService.setProducts(prods);
    }
  }

  async deleteProduct(id: number): Promise<void> {
    const prods = await this.getAllProducts();
    let index = prods.findIndex(prod => prod.id === id);
    prods.splice(index, 1);
    this.storageManagerService.setProducts(prods);
  }

}
