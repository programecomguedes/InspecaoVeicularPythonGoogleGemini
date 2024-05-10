import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSubmitDataRoutingModule } from './car-submit-data-routing.module';
import { CarSubmitDataComponent } from './car-submit-data.component';

import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const primeng = [
  ButtonModule,
  FileUploadModule,
  ProgressSpinnerModule
]

@NgModule({
  declarations: [
    CarSubmitDataComponent
  ],
  imports: [
    CommonModule,
    CarSubmitDataRoutingModule,
    ...primeng
  ]
})
export class CarSubmitDataModule { }
