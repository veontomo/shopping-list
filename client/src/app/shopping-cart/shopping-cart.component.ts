import { Component, OnInit, Input } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';
import { Item } from '../model/Item';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  @Input() items: Array<Item> = new Array<Item>();

  constructor() { }

  ngOnInit() {
  }



}
