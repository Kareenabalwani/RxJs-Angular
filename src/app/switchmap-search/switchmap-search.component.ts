import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs';
import { SearchServiceService } from '../search-service.service';
import { SearchInterface } from '../SearchInterface';

@Component({
  selector: 'app-switchmap-search',
  templateUrl: './switchmap-search.component.html',
  styleUrls: ['./switchmap-search.component.scss']
})
export class SwitchmapSearchComponent implements AfterViewInit {
 constructor(private _searchService:SearchServiceService){}

  

  @ViewChild('searchForm') searchForm!:NgForm;
  searchResult!:SearchInterface[];
  ngAfterViewInit(): void {
  
    this._searchService.getSearches('angular').subscribe(x=>console.log(x));
  let formValueObs=  this.searchForm.valueChanges;
  formValueObs?.pipe(
    // map(res => res.searchTerm) -approach 1
    pluck('searchTerm'),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(data => this._searchService.getSearches(data))
  )
  .subscribe(x=>{console.log(x)
  this.searchResult = x});
  }
}
