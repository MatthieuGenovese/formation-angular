import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';
import { TextsModule } from './texts/texts.module';
import { IconsModule } from './icons/icons.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import  localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    UiModule,
    TextsModule,
    IconsModule,
    CoreModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
