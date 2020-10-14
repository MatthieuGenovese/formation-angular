import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { JourPipe } from './pipes/jour.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { DayDirective } from './directives/day.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, JourPipe, ColorStateDirective, DayDirective, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TotalPipe,
    JourPipe,
    ColorStateDirective,
    DayDirective,
    BtnComponent
  ]
})
export class SharedModule { }
