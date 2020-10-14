import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  //{ path: 'orders', component: PageListOrdersComponent },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'clients', component: PageListClientsComponent },
  { path: 'clients', loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule)},
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router){
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('Routes = ', JSON.stringify(router.config, replacer, 1));
  }
 }
