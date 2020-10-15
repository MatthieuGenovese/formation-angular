import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


@NgModule({
  declarations: [PageListClientComponent, FormAddClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
