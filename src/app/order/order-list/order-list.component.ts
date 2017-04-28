import { Component, OnInit } from '@angular/core';
import { OrderService } from './../shared/order.service';
import { Order } from './../shared/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
        .subscribe(orders => this.orders = orders);
  }

}
