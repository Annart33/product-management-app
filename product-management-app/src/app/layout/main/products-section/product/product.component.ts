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

  selected: boolean = false;

  constructor(private globalService: GlobalService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  setSelected(): void {
    this.selected = !this.selected;
  }

  removeSelected(): void {
    document.querySelector(".selected")?.classList.remove("selected");
    this.globalService.hideCard();
  }

  showDetails(): void {
    this.removeSelected();

    if (!this.selected) {
      this.globalService.hideAddProd();
      this.globalService.setProd(this.product);
      this.selectedProdEvent.emit(this.product);
    }

    this.setSelected();
  }

  delete(): void {
    const ob = this.productService.deleteProduct(this.product.id);
    ob.subscribe(prod => {
      this.globalService.hideCard();
    });
  }

}
