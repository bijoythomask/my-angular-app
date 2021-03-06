import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { MaterialModule } from '@angular/material';

import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from './shared/order.service';
import { OrderEditComponent } from './order-edit/order-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent, OrderListComponent, OrderEditComponent],
  providers : [ OrderService ]
})
export class OrderModule { }
