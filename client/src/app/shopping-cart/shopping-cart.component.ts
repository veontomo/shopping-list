import { Component, OnInit } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';
import { Item } from '../model/Item';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public items: Array<Item> = new Array<Item>();
  constructor() { }

  ngOnInit() {
    this.items.push(<Item>{ name: 'bread', category: 0, price: 1.5 });
    this.items.push(<Item>{ name: 'towel', category: 1, price: 3.25 });
    this.items.push(<Item>{ name: 'flower', category: 2, price: 5.8 });
  }

}
