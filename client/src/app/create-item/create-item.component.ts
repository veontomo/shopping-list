import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
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
  public name: String = '';

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
   * Clone current item and emit it to the parent component.
   * Without cloning, the object's reference is passed to the parent component
   * and the binding to that object is maintaned.
   */
  public emitItem() {
    const copy: Item = < Item > {
      price: this.price,
      name: this.name,
      category: this.category
    };
    this.itemEmitter.emit(copy);
    this.reset();
  }

  /**
   * Reset the input fields of the item
   */
  private reset() {
    this.name = '';
    this.price = undefined;
    this.category = 0;
  }

}
