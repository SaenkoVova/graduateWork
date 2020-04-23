import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FondsComponent} from './fonds/fonds.component';
import {FondDetailsComponent} from './fond-details/fond-details.component';
import {CaseViewComponent} from './case-view/case-view.component';
import {AuthComponent} from './auth/auth.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fonds', component: FondsComponent},
  { path: 'fonds/:id', component: FondDetailsComponent},
  { path: 'fonds/:id/case/:caseId', component: CaseViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
