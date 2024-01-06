import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  handleError(response:HttpResponse<any>){
    let errormsg;
    if (response && response.body && response.body.err){
      errormsg="Some error!";
    }else{
      errormsg="Error to hai";
    }
    return throwError(errormsg);
  }
}
