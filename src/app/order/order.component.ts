import { Component, OnInit } from '@angular/core';
import { OrderService } from './shared/order.service';
import { Order } from './shared/order'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
        .subscribe(orders => this.orders = orders);
  }

  gotoDetails(userid: String){
        
    }

}
