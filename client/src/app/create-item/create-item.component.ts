import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  Item
} from '../model/Item';
import {
  ShoppingListService
} from '../services/shopping-list.service';

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
   * Output handler
   */
  @Output() itemEmitter: EventEmitter < Item > = new EventEmitter();

  /**
   * item name
   */
  public name: String;

  /**
   * item price
   */
  public price: number;

  /**
   * item's category
   */
  public category: number;

  private categories: Array < String > = new Array < String > ();

  /**
   * Retrieves all available categories
   */
  public getCategories(): Array < String > {
    return this.categories;
  }
  constructor(private service: ShoppingListService) {}

  ngOnInit() {
    this.reset();
    this.service.getCategories().subscribe(
      (data: Array < String > ) => {
        this.categories = data;
      },
      error => console.log(error));
  }

  /**
   * Create an Item instance and emit it to the parent component.
   */
  public emitItem() {
    const item: Item = < Item > {
      price: this.price,
      name: this.name,
      category: this.category
    };
    console.log('sending item', item);
    this.itemEmitter.emit(item);
    this.reset();
  }

  /**
   * Reset the input fields of the item
   */
  private reset() {
    this.name = undefined;
    this.price = undefined;
    this.category = 0;
  }

}
