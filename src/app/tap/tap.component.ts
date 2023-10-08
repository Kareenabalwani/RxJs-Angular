import { Component } from '@angular/core';
import { Subscription, from, interval, map, tap, toArray } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  constructor(private _utilityService:UtilityServiceService){}
arr=["My","Name","is","Kareena","Balwani"];
colors=["red","green","blue","purple","orange","pink"]
sub1!:Subscription;
sub2!:Subscription;
data1:any;
data2:any;
mycolor:string="";

ngOnInit(){
  const source = interval(1000);
  //Example 1:
  this.sub1 =source.pipe(tap(x=> {
      if(x==this.arr.length){
        console.log("terminated");
        this.sub1.unsubscribe();
      }
    }),map(x=>this.arr[x],
)).subscribe(data =>{
    console.log(data);
    this._utilityService.print2("ul-id",data);
  }) 

//Example 2:
// ====================================

  this.sub2 =source.pipe(tap(x=> {
    this.mycolor=this.colors[x];
    if(x==this.colors.length){
      console.log("terminated");
      this.sub2.unsubscribe();
      this.mycolor="black";
    }
  }),map(x=>this.colors[x],
)).subscribe(data =>{
  console.log(data);
  // this.mycolor=data; you can do this here also but i have done this in tap
  //but you can't set the default black color when the map returns undefined so set it when you  check the condition to unsunscribe in tap
  this._utilityService.print2("ul-id-color",data);
}) 
}
}
