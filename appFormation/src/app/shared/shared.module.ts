import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { JourPipe } from './pipes/jour.pipe';



@NgModule({
  declarations: [TotalPipe, JourPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    JourPipe
  ]
})
export class SharedModule { }
