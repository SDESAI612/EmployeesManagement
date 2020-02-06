import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:
  [

  ]
})
export class CoreModule { }
