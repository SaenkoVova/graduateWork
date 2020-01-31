import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FondListComponent } from './fond-list/fond-list.component';


const routes: Routes = [
  {path: 'fonds', component: FondListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
