import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgentComponent } from './agent/agent.component';
import { MapComponent } from './map/map.component';
import { WeaponComponent } from './weapon/weapon.component';
import { BundleComponent } from './bundle/bundle.component';
import { PickRandomAgentComponent } from './pick-random-agent/pick-random-agent.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'map', component: MapComponent },
  { path: 'weapon', component: WeaponComponent },
  { path: 'bundle', component: BundleComponent },
  { path: 'pick-random-agent', component: PickRandomAgentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
