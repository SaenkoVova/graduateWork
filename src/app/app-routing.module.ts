import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FondListComponent } from './fond-list/fond-list.component';
import { CaseListComponent } from './case-list/case-list.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'fonds', component: FondListComponent },
  { path: 'fonds/:fondId/cases', component: CaseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
