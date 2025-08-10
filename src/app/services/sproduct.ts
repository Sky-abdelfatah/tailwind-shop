import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Sproduct {
  private readonly httpClient = inject(HttpClient);
  getsProducts(): Observable<any> {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
