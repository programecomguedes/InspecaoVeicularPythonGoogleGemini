import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInspectionListComponent } from './car-inspection-list.component';

const routes: Routes = [{ path: '', component: CarInspectionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInspectionListRoutingModule { }
