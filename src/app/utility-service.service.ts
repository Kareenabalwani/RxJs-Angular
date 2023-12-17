import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
   videoEmit = new ReplaySubject<string>(5,3000);
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
  printNotification(id:string,content:any){
    var divElement = document.createElement('div');
    divElement.setAttribute("class","notification-container");
    divElement.innerHTML   = content; 
    document.getElementById(id)?.prepend(divElement);
  }
}

