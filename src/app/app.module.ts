import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './valorant_services/api.service';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './headerHome/headerHome.component';
import { AgentComponent } from './agent/agent.component';
import { MapComponent } from './map/map.component';
import { WeaponComponent } from './weapon/weapon.component';
import { BundleComponent } from './bundle/bundle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { AppComponentValorant } from './valorant_components/app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomeComponent,
    AgentComponent,
    MapComponent,
    WeaponComponent,
    BundleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatCardModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
