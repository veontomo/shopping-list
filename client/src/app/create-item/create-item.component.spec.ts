import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemComponent } from './create-item.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { HttpClientModule } from '@angular/common/http';



describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [ShoppingListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the button "Add"', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('.btn')).nativeElement;
    expect(compiled.textContent).toContain('Add');
  }));

  it('should insert the item name', async(() => {
    const nameElem: DebugElement = fixture.debugElement.query(By.css('#itemName'));
    const nameNative = nameElem.nativeElement;
    nameNative.value = 'test-product';
    nameNative.dispatchEvent(new Event('input'));
    expect(component.item.name).toBe('test-product');
  }));

  it('should insert the item price', async(() => {
    const priceElem: DebugElement = fixture.debugElement.query(By.css('#itemPrice'));
    const priceNative = priceElem.nativeElement;
    priceNative.value = '123.22';
    priceNative.dispatchEvent(new Event('input'));
    expect(component.item.price).toBe(123.22);
  }));

  it('should have drop down list content', async(() => {
    const spy = spyOn(component, 'getCategories').and.returnValue(['first', 'second', 'third', 'fourth']);
    fixture.detectChanges();
    const categories = fixture.debugElement.queryAll(By.css('#itemCategory option'));
    expect(categories.length).toBe(4);
    expect(categories[0].nativeElement.innerHTML).toBe('first');
    expect(categories[1].nativeElement.innerHTML).toBe('second');
    expect(categories[2].nativeElement.innerHTML).toBe('third');
    expect(categories[3].nativeElement.innerHTML).toBe('fourth');
  }));



});
