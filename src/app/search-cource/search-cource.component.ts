import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-cource',
  templateUrl: './search-cource.component.html',
  styleUrls: ['./search-cource.component.css']
})
export class SearchCourceComponent {

  searchCourse:string = '';

  @Output()
  searchTextEvent : EventEmitter<string> = new EventEmitter<string>()

  onSearchCourse(){
    this.searchTextEvent.emit(this.searchCourse)
    console.log(this.searchCourse)
  }
}
