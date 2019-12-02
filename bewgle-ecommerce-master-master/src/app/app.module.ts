import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { HeadphoneslgotComponent } from './headphoneslgot/headphoneslgot.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ItemsComponent,
    LoginComponent,
    HeadphonesComponent,
    HeadphoneslgotComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
