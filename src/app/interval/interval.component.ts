import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  count: Number = 0;
   subsc:Subscription; 
  constructor(private utilityService:UtilityServiceService){

const intervalVideos = interval(2000);
const timerVideos = timer(2000,1000);

 this.subsc = intervalVideos.subscribe(x => {
  console.log(x);
  this.count=x;
  this.utilityService.print(x,"ul-id");
  if(x==5){
    this.subsc.unsubscribe();
  }
}
);
  }
  
}
