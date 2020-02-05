import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEmployeePipe } from './search-employee.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [SearchEmployeePipe, SortPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchEmployeePipe,
    SortPipe
  ]
})
export class SharedModule { }
