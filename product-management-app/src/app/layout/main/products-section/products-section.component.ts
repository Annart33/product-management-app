import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  products: Array<Product> = [];
  selectedProduct: Product = new Product(0, "", "", 0);

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    const ob = this.productService.getAllProducts();
    ob.subscribe(prods => {
      this.products = prods;
    });
  }

  setProduct(product: Product): void {
    this.selectedProduct = product;
  }

  setProducts(products: Array<Product>): void {
    this.products = products;
  }

}
