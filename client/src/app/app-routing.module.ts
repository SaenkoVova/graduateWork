import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FondsComponent} from './fonds/fonds.component';
import {FondDetailsComponent} from './fond-details/fond-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fonds', component: FondsComponent},
  { path: 'fonds/:id', component: FondDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
