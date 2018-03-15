import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateItemComponent } from './create-item/create-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Item } from './model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

   accumulator: Array<Item> = [];

  public acceptItem(item: Item) {
    this.accumulator.push(item);
  }
}
