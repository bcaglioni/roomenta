import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeListComponent } from './sede-list.component';
import { SedeListRoutingModule } from './sede-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SedeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SedeListComponent
  ]
})
export class SedeListModule { }
