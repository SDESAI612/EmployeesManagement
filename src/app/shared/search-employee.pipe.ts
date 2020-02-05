import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    return categories.filter(function(category){
      return category.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
}
}