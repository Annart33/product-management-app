import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {


  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  addNewProduct(): void {
    this.globalService.setAddProd();
    this.globalService.hideCard();
  }

}
