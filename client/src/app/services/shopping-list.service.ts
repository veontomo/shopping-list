import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private baseUrl = 'http://localhost:4210';


  constructor(private http: HttpClient) { }

  getCategories(): Observable<Object> {
    console.log('calling back-end');
    return this.http.get(`${this.baseUrl}/categories`);
  }


}
