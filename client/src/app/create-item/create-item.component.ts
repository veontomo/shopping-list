import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { ShoppingListService } from '../services/shopping-list.service';

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

  private categories: Array<String> = new Array<String>();

  /**
   * Retrieves all available categories
  */
  public getCategories(): Array<String> {
    return this.categories;
  }
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    this.reset();
    this.service.getCategories().subscribe(
      (data: Array<String>) => { this.categories = data; },
       error => console.log(error));
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
