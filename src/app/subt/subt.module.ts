import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubttComponent } from './subtt/subtt.component';
import { SubtService } from './subtt/service'; 


@NgModule({
  declarations: [
    SubttComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubttComponent
  ],
  providers: [
    SubtService
  ]
})
export class SubtModule { }
