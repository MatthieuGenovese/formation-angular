import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TableLightComponent } from 'src/app/templates/table-light/table-light.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TotalPipe } from 'src/app/shared/pipes/total.pipe';
import { JourPipe } from 'src/app/shared/pipes/jour.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    SharedModule
  ]
})
export class OrdersModule { }
