import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaEditComponent } from './aula-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AulaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaEditRoutingModule { }
