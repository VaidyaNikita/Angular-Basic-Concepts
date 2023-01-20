import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchValue:string='';

getSearchValue(data:Event){
  console.log((<HTMLInputElement>data.target).value);
  this.searchValue = (<HTMLInputElement>data.target).value;
}
}
