import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [
    new Product(0, "Scarface", "Action", 5),
    new Product(1, "Scent of a woman", "Drama", 4),
    new Product(2, "Dr. No", "Action", 3),
    new Product(3, "Breakfast at Tiffany's", "Romantic comedy", 2),
  ];
  idCount: number = 0;

  constructor() {
    if (this.products.length) {
      this.idCount = this.products[this.products.length - 1].id;
    }
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    let result;
    this.products.forEach(prod => {
      if (prod.id === id) result = prod;
    });
    return result;
  }

  getProductByName(name: string): Product | undefined {
    let result;
    this.products.forEach(prod => {
      if (prod.name === name) result = prod;
    });
    return result;
  }

  addProduct(product: Product): void {
    this.idCount++;
    product.id = this.idCount;
    this.products.push(product);
  }

  updateProduct(id: number, name?: string, desc?: string, price?: number): void {
    if (name) this.products[id].name = name;
    if (desc) this.products[id].description = desc;
    if (price) this.products[id].price = price;
  }

  deleteProduct(id: number): void {
    let index = this.products.findIndex(prod => prod.id === id);;
    this.products.splice(index, 1);
  }

}
