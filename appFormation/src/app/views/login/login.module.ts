import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [PageLoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
