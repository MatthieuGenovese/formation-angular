import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TableStrippedComponent } from './table-stripped/table-stripped.component';
import { TitreAComponent } from './titre-a/titre-a.component';
import { TitreBComponent } from './titre-b/titre-b.component';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStrippedComponent, TitreAComponent, TitreBComponent],
  imports: [
    CommonModule,
    SharedModule,
    TextsModule
  ],
  exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStrippedComponent,
    TitreAComponent,
    TitreBComponent
  ]
})
export class TemplatesModule { }
