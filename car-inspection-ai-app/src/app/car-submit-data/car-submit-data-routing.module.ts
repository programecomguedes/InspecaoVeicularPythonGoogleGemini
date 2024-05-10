import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSubmitDataComponent } from './car-submit-data.component';

const routes: Routes = [{ path: '', component: CarSubmitDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSubmitDataRoutingModule { }
