import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAllProducts(): Observable<Array<Product>> {
    return new Observable<Array<Product>>(observer => {
      setTimeout(() => observer.next(this.products), 1000);
    });
  }

  getProductByName(name: string): Observable<Product | undefined> {
    return new Observable<Product | undefined>(observer => {
      setTimeout(() => {
        let result;
        this.products.forEach(prod => {
          if (prod.name === name) result = prod;
        });
        observer.next(result)
      }, 1000);
    });
  }

  addProduct(product: Product): Observable<Product> {
    return new Observable<Product>(observer => {
      setTimeout(() => {
        this.idCount++;
        product.id = this.idCount;
        this.products.push(product);
        observer.next(product);
      }, 1000);
    });
  }

  updateProduct(id: number, name?: string, desc?: string, price?: number): Observable<Product> {
    return new Observable<Product>(observer => {
      setTimeout(() => {
        if (name) this.products[id].name = name;
        if (desc) this.products[id].description = desc;
        if (price) this.products[id].price = price;
        observer.next(this.products[id]);
      }, 1000);
    });
  }

  deleteProduct(id: number): Observable<void> {
    return new Observable<void>(observer => {
      setTimeout(() => {
        let index = this.products.findIndex(prod => prod.id === id);
        this.products.splice(index, 1);
      }, 1000);
    });
  }

}
