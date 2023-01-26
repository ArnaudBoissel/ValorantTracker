import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgentComponent } from './agent/agent.component';
import { MapComponent } from './map/map.component';
import { WeaponComponent } from './weapon/weapon.component';
import { BundleComponent } from './bundle/bundle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'map', component: MapComponent },
  { path: 'weapon', component: WeaponComponent },
  { path: 'bundle', component: BundleComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
