import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { GlobalService } from 'src/app/services/global-service.service';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() selectedProd = new Product(0, "", "", 0);
  @Output() selectedProdEvent = new EventEmitter<Product>();

  constructor(public globalService: GlobalService, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  async save(product: Product): Promise<void> {
    await this.productService.updateProduct(this.selectedProd.id, product.name, product.description, product.price);
    this.globalService.hideCard();
    this.selectedProdEvent.emit(this.selectedProd);
  }

  async add(product: Product) {
    await this.productService.addProduct(product);
    this.globalService.hideAddProd();
    this.selectedProdEvent.emit(this.selectedProd);
  }

}
