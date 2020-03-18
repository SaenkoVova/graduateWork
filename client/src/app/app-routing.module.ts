import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FondsComponent} from './fonds/fonds.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fonds', component: FondsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
