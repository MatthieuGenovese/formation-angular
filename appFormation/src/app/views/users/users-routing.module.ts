import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';

const routes: Routes = [
  { path : '', component: PageListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
