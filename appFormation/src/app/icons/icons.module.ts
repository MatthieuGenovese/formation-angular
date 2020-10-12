import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditionComponent } from './icon-edition/icon-edition.component';



@NgModule({
  declarations: [IconNavComponent, IconEditionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconEditionComponent
  ]
})
export class IconsModule { }
