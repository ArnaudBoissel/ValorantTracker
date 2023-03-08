import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './headerHome/headerHome.component';
import { AgentComponent } from './agent/agent.component';
import { MapComponent } from './map/map.component';
import { WeaponComponent } from './weapon/weapon.component';
import { BundleComponent } from './bundle/bundle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { PickRandomAgentComponent } from './pick-random-agent/pick-random-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomeComponent,
    AgentComponent,
    MapComponent,
    WeaponComponent,
    BundleComponent,
    PickRandomAgentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonToggleModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
