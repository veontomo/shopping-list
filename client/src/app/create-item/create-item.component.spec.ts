import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemComponent } from './create-item.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemComponent ],
      imports: [FormsModule]
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

  it('should insert the item price', async(() => {
    const spy = spyOn(component, 'getCategories').and.returnValue(['first', 'second', 'third']);
    const category = fixture.debugElement.query(By.css('#itemCategory')).nativeElement;
    category.value = 2;
    category.dispatchEvent(new Event('input'));
    expect(component.item.category).toBe(2);
  }));



});
