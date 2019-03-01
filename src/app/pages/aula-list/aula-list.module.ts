import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulaListComponent } from './aula-list.component';
import { AulaListRoutingModule } from './aula-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AulaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AulaListComponent
  ]
})
export class AulaListModule { }
