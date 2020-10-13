import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditionComponent } from './icon-edition/icon-edition.component';
import { IconPoweroffComponent } from './icon-poweroff/icon-poweroff.component';



@NgModule({
  declarations: [IconNavComponent, IconEditionComponent, IconPoweroffComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconEditionComponent,
    IconPoweroffComponent
  ]
})
export class IconsModule { }
