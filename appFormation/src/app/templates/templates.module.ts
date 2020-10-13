import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';



@NgModule({
  declarations: [TableLightComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent
  ]
})
export class TemplatesModule { }
