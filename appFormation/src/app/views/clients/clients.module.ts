import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageListClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule
  ]
})
export class ClientsModule { }
