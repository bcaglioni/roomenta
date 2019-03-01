import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeListComponent } from './sede-list.component';

const routes: Routes = [
  {
    path: '',
    component: SedeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeListRoutingModule { }
