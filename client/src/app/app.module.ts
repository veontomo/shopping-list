import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingListService } from './services/shopping-list.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShowItemComponent } from './show-item/show-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ShoppingCartComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [ShoppingListService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
