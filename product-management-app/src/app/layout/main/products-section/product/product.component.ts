import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { GlobalService } from 'src/app/services/global-service.service';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product = new Product(0, "", "", 0);
  @Output() selectedProdEvent = new EventEmitter<Product>();

  constructor(private globalService: GlobalService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  showDetails(): void {
    this.globalService.hideAddProd();
    this.globalService.setProd(this.product);
    this.selectedProdEvent.emit(this.product);
  }

  delete(): void {
    console.log(this.product.id)
    this.productService.deleteProduct(this.product.id);
  }

}
