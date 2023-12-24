import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { SearchInterface } from './SearchInterface';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
 url ="https://my-json-server.typicode.com/uxtrendz/apis/videolist";
  constructor(private http:HttpClient) { }
  getSearches(searchTerm:string):Observable<SearchInterface[]>{
      return this.http.get<SearchInterface[]>(this.url+'?q='+searchTerm);
  }
}
