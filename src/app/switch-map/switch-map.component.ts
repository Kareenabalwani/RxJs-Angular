import { Component } from '@angular/core';
import { from, of, map, mergeAll, mergeMap, delay, switchAll, switchMap, concatMap } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  constructor(private _utilityservice:UtilityServiceService ){}
  source = from (['Tech','Travel','Horror']);
  getObservable(video:string){
    return of(video+ " video uploaded").pipe(delay(1000));
  }
  ngOnInit(){
     
   //ex:1 nested subscribe approach
    this.source.
    pipe(
      map(m => this.getObservable(m)),
      ).
      subscribe((x:any) =>x.subscribe((y:any) => {console.log("subscribe again! approach ",y);this._utilityservice.print2("ul1",y) }));
              

      //ex:2 map +  Switch all
      this.source.
      pipe(
        map(m => this.getObservable(m)),
        switchAll()
        ).
        subscribe(x => {console.log("map + merge all ",x);this._utilityservice.print2("ul2",x)});

 //ex 3 : switch map which is switchAll + map combination
        this.source.
      pipe(
        switchMap(m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("mergemap "+x);this._utilityservice.print2("ul3",x)});

 // comparisons
    //ex:4 MergeMap
    this.source.
    pipe(
      mergeMap(m => this.getObservable(m)),
      ).
      subscribe((x:any) => {this._utilityservice.print2("ul4",x)});
              

      //ex:5 ConcatMap
      this.source.
      pipe(
        concatMap(m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("ConcatMap "+x);this._utilityservice.print2("ul5",x)});

      //ex 6 : switch map which is switchAll + map combination
        this.source.
      pipe(
        switchMap(m => this.getObservable(m)),
        ).
        subscribe(x => {console.log("switchMap "+x);this._utilityservice.print2("ul6",x)});

        
      }

   
      
      
     
}
