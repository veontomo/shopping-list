import { Component, OnInit } from '@angular/core';
import {Item} from '../model/Item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
/**
 * Component that is responsible for adding a new item.
 */
export class CreateItemComponent implements OnInit {

  /**
   * item which fields should be initialized by this component
   */
  public item: Item = <Item>{};

  /**
   * Retrieves all available categories
  */
  public getCategories(): Array<string> {
    return ['food', 'household', 'other'];
  }
  constructor() { }

  ngOnInit() {
    this.reset();
  }

  public create() {
    alert('Added');
  }

  /**
   * Reset the input fields of the item
   */
  private reset() {
    this.item.name = '';
    this.item.price = 0;
    this.item.category = 0;
  }

}
