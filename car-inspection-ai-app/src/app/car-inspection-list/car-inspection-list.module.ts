import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInspectionListRoutingModule } from './car-inspection-list-routing.module';
import { CarInspectionListComponent } from './car-inspection-list.component';


@NgModule({
  declarations: [
    CarInspectionListComponent
  ],
  imports: [
    CommonModule,
    CarInspectionListRoutingModule
  ]
})
export class CarInspectionListModule { }
