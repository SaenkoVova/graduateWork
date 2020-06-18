import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FondsComponent} from './fonds/fonds.component';
import {FondDetailsComponent} from './fond-details/fond-details.component';
import {CaseViewComponent} from './case-view/case-view.component';
import {AuthComponent} from './auth/auth.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminGuardGuard} from './guards/admin-guard.guard';
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import { ForumComponent } from './forum/forum.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fonds', component: FondsComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'forum/topic/:topicId', component: ReviewComponent},
  { path: 'fonds/:id', component: FondDetailsComponent},
  { path: 'fonds/:id/case/:caseId', component: CaseViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin' , component: AdminComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
