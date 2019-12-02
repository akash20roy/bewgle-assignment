import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import{ ItemsComponent } from './items/items.component';
import{ LoginComponent } from './login/login.component';
import{ HeadphonesComponent } from './headphones/headphones.component';
import{ HeadphoneslgotComponent } from './headphoneslgot/headphoneslgot.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
   },
  {  path: 'index',
  component: IndexComponent},
  {  path: 'items',
  component: ItemsComponent},
  {  path: 'login',
  component: LoginComponent},
  {  path: 'headphones',
  component: HeadphonesComponent},
  {  path: 'headphoneslgot',
  component: HeadphoneslgotComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent,ItemsComponent,LoginComponent,HeadphonesComponent,HeadphoneslgotComponent]
