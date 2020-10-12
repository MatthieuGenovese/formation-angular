import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class UiModule { }
