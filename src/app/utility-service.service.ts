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
}
