import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaListComponent } from './aula-list.component';

const routes: Routes = [
  {
    path: '',
    component: AulaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaListRoutingModule { }
