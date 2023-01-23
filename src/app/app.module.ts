import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import axios from 'axios';
import { ApiService } from './valorant_services/api.service';
import { HomeComponent } from './home/home.component';
//import { AppComponentValorant } from './valorant_components/app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [HomeComponent, AppComponent]
})
export class AppModule { }
