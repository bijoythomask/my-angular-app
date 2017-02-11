import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Order } from './order';

@Injectable()
export class OrderService {

  private ordersUrl = 'app/orders';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    console.log('Order service is inililized');
  }

  getOrders(): Observable<Order[]> {
      return this.http
          .get(this.ordersUrl)
          .map(response => response.json().data as Order[]);
  }

}
