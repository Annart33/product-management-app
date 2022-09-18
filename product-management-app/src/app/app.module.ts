import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTitleComponent } from './shared/components/product-title/product-title.component';
import { ProductDescriptionComponent } from './shared/components/product-description/product-description.component';
import { DeleteButtonComponent } from './shared/components/delete-button/delete-button.component';
import { ProductImageComponent } from './shared/components/product-image/product-image.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { InputComponent } from './shared/components/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AddNewComponent,
    SearchComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductTitleComponent,
    ProductDescriptionComponent,
    DeleteButtonComponent,
    ProductImageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
