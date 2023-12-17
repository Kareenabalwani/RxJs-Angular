import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {
  constructor(private _utilityservice:UtilityServiceService ){}
  source = from (['Tech','Travel','Horror']);
  getObservable(video:string){
    return of(video+ " video uploaded");
  }
  ngOnInit(){
     
   //ex:1 nested subscribe approach
    this.source.
    pipe(
      map(m => this.getObservable(m)),
      ).
      subscribe((x:any) =>x.subscribe((y:any) => {console.log("subscribe again! approach ",y);this._utilityservice.print2("ul1",y) }));
              

      //ex:2 map +  merge all
      this.source.
      pipe(
        map(m => this.getObservable(m)),
        mergeAll()
        ).
        subscribe(x => {console.log("map + merge all ",x);this._utilityservice.print2("ul2",x)});

 //ex 3 : merge map which is mergeall + map combination
        this.source.
      pipe(
        mergeMap(m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("mergemap "+x);this._utilityservice.print2("ul3",x)});
      }

     

    }


    
 



