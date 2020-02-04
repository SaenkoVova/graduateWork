import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FondListComponent } from './fond-list/fond-list.component';
import { CaseListComponent } from './case-list/case-list.component';


const routes: Routes = [
  { path: 'fonds', component: FondListComponent },
  { path: 'fonds/:fondId/cases', component: CaseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
