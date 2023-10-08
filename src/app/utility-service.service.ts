import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }
  print(count:Number,id:string){
    var li = document.createElement('li');
    li.innerText   = "video"+   count; 
    document.getElementById(id)?.appendChild(li);
  }
  print2(id:string,content:any){
    var li = document.createElement('li');
    li.innerText   = content; 
    document.getElementById(id)?.appendChild(li);
  }
}

