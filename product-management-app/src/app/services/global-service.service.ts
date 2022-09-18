import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  showProdDetails: boolean = false;
  addProd: boolean = false;
  currProd?: Product;

  constructor() {
  }

  showCard(): void {
    this.showProdDetails = true;
  }

  hideCard(): void {
    this.showProdDetails = false;
  }

  shouldShowCard(): boolean {
    return this.showProdDetails;
  }

  shouldShowAddProd(): boolean {
    return this.addProd;
  }

  setAddProd(): void {
     this.addProd = true;
  }

  hideAddProd(): void{
    this.addProd = false;
  }

  setProd(product: Product): void {
    this.currProd = product;
    this.showCard();
  }

  getCurrProd(): Product | undefined {
    return this.currProd;
  }



}
