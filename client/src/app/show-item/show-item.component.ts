import {
  ShoppingListService
} from '../services/shopping-list.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Item
} from '../model/Item';
import {
  CurrencyPipe
} from '@angular/common';
@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
})
/**
 * Visualise single shopping cart item.
 */
export class ShowItemComponent implements OnInit {

  constructor(private service: ShoppingListService) {}

  @Input() item: Item;

  ngOnInit() {}

}
