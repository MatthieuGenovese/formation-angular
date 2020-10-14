import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { JourPipe } from './pipes/jour.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { DayDirective } from './directives/day.directive';



@NgModule({
  declarations: [TotalPipe, JourPipe, ColorStateDirective, DayDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    JourPipe,
    ColorStateDirective,
    DayDirective
  ]
})
export class SharedModule { }
