import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  constructor(private _utilityservice:UtilityServiceService ){}
  source = from (['Tech','Travel','Horror']);
  getObservable(video:string){
    return of(video+ " video uploaded").pipe(delay(2000));
  }
  ngOnInit(){
     

    const notification_data = `
    <img class="logo" src="../../assets/facebook.png" alt="Facebook Logo">
    <div class="notification-content">
      <h1>Facebook</h1>
      <p>You have a new notification from John Doe.</p>
    </div>
  `;
  
    this._utilityservice.printNotification("notifications",notification_data);

   //ex:1 nested subscribe approach
    this.source.
    pipe(
      map(m => this.getObservable(m)),
      ).
      subscribe((x:any) =>x.subscribe((y:any) => {console.log("subscribe again! approach ",y);this._utilityservice.print2("ul1",y) }));
              

      //ex:2 map +  concat all
      this.source.
      pipe(
        map(m => this.getObservable(m)),
        concatAll()
        ).
        subscribe(x => {console.log("map + concat all ",x);this._utilityservice.print2("ul2",x)});

 //ex 3 : concat map which is concatall + map combination
        this.source.
      pipe(
        concatMap (m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("concatmap "+x);this._utilityservice.print2("ul3",x)});
        
  //ex: 4 merge map-just for comparison
        this.source.
      pipe(
        mergeMap (m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("mergemap "+x);this._utilityservice.print2("ul4",x)});
      }
      }
      

