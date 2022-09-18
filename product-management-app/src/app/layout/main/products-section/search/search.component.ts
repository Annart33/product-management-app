import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() prods: Array<Product> = [];
  @Output() filteredProdEvent = new EventEmitter<Array<Product>>();

  value: string = "";
  timer: any;
  waitTime: number = 500;
  allProds: Array<Product> = this.prods;

  constructor() { }
 

  ngOnInit(): void {
this.allProds=this.prods;
  }

  filterProducts(): void {

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      let matches;
      const lowerCaseVal = this.value.toLocaleLowerCase();

      matches = lowerCaseVal.trim() == "" ? this.allProds :
      this.prods.filter((prod) => {
          return prod.name.toLocaleLowerCase().includes(lowerCaseVal) || prod.description.toLocaleLowerCase().includes(lowerCaseVal);
        });

      this.filteredProdEvent.emit(matches);

    }, this.waitTime);



  }
}
