import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

import { OrderComponent } from './order.component';

const routes: Routes = [
    { path: 'order', component: OrderComponent ,

      children: [
        {
          path: '',
          component: OrderListComponent,
          children: [
            {
              path: ':id',
              component: OrderEditComponent
            }
          ]
        }
      ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrderRoutingModule { }
