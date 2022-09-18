import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddNewComponent } from './layout/main/products-section/add-new/add-new.component';
import { SearchComponent } from './layout/main/products-section/search/search.component';
import { ProductComponent } from './layout/main/products-section/product/product.component';
import { ProductDetailsComponent } from './layout/main/products-section/product-details/product-details.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsSectionComponent } from './layout/main/products-section/products-section.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AddNewComponent,
    SearchComponent,
    ProductComponent,
    ProductDetailsComponent,
    ButtonComponent,
    InputComponent,
    ProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
