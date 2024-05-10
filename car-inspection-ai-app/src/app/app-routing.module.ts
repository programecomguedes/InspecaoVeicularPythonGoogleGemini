import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'car-submit-data', pathMatch: 'full'},
  { path: 'car-submit-data', loadChildren: () => import('./car-submit-data/car-submit-data.module').then(m => m.CarSubmitDataModule) },
  { path: 'car-inspection-list', loadChildren: () => import('./car-inspection-list/car-inspection-list.module').then(m => m.CarInspectionListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
