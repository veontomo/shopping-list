import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemComponent } from './create-item.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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
});
