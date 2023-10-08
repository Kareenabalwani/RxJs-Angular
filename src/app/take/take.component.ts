import { Component } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
  constructor(private _utilityService:UtilityServiceService){}
  colors=["red","green","blue","purple","orange","pink"]
  ngOnInit(){
    const source=from(this.colors);
    // Ex:1 take first 3
    source.pipe(take(3)).subscribe(data=>{
      this._utilityService.print2("ul-id",data);
    });
    // Ex:2 Take last 5
    source.pipe(takeLast(5)).subscribe(data=>{
      this._utilityService.print2("ul-id-last",data);
    })
    // Ex:3 Take until you click anywhere on a document
    const source2=interval(1000);
    let condition1 = timer(4000);
    let condition2 = fromEvent(document,'click');
    source2.pipe(takeUntil(condition2)).subscribe(data=>{
      console.log(data);
      this._utilityService.print2("ul-id-until",data);
    })
  }
}
