import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulaEditComponent } from './aula-edit.component';
import { AulaEditRoutingModule } from './aula-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AulaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AulaEditComponent
  ]
})
export class AulaEditModule { }
