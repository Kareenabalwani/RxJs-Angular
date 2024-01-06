import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, shareReplay, map, catchError } from 'rxjs';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-catch-throw-error',
  templateUrl: './catch-throw-error.component.html',
  styleUrls: ['./catch-throw-error.component.scss']
})
export class CatchThrowErrorComponent {
  constructor( private http : HttpClient,private _errorService:ErrorService){}
  url:string ="https://jsonplaceholder.typicode.com/todo";
  allTodos!:any;
  error:string=''
  

  ngOnInit(){
    this.allTodos = this.http.get(this.url).pipe(catchError(this._errorService.handleError)).subscribe(
      (success)=>{
        this.allTodos= success;
      console.log(success)
    },(err)=>{
      console.log(err);
      this.error=err;
    });
    

  }
}
