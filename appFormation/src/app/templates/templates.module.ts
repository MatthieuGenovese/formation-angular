import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TableLightComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableLightComponent
  ]
})
export class TemplatesModule { }
