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
    this.allProds = this.prods;
  }


  /*Autocomplete functionality - 
  set a timeout to allow the user to type before filtering right away
  use lowercase to make the search NOT case sensitive
  include words in the product's title & description */
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
