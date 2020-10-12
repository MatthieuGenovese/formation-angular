import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageHomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
