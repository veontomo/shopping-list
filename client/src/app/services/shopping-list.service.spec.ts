import { TestBed, inject } from '@angular/core/testing';

import { ShoppingListService } from './shopping-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('ShoppingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ShoppingListService], (service: ShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
