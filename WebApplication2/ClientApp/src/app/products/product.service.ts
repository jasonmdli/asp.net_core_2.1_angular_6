import { Injectable, Inject } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private _productUrl = 'api/Products/List';
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._productUrl = baseUrl + 'api/Products/List';
  }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl, { responseType: 'json' });
  }
}
