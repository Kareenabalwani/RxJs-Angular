import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, map, pluck, combineLatest, withLatestFrom, zip, forkJoin, take } from 'rxjs';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss']
})
export class ZipForkJoinComponent {
  constructor(private renderer: Renderer2) {}

  names = ['john','doe','max','alex','nobita'];
  colors = ['red','green','yellow','orange','purple'];
  
  //here we are working with DOM hence the after view init is required
    // template reference 
    @ViewChild('name') name!:ElementRef;
    @ViewChild('color') color!:ElementRef;
  
    ngAfterViewInit(): void {
  // fromEvent<any>(this.name.nativeElement,'change').pipe(map(event=>event.target.value)).subscribe(x=>console.log(x));
  
  // fromEvent<any>(this.color.nativeElement,'change').pipe(pluck ('target','value')).subscribe(x=>console.log(x));
  
  const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event=>event.target.value)).pipe(take(2));
  
  const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(map(event=>event.target.value)).pipe(take(3));
  
  //ex:-1 zip
  // zip works only when both of the observables' value get changed
  zip(nameObs,colorObs).subscribe(([name,color])=>
  {
    console.log(name,color);
    this.createBox(name,color,"elContainer")
  });
  
    // ex:2 Fork Join
    //fork join only works when the observables ends,gets the last values
    forkJoin(nameObs,colorObs).subscribe(([name,color])=>
  {
    console.log(name,color);
    this.createBox(name,color,"elContainer2")
  });
    
    }
  
    
     createBox(name:string,color:string,containerId:string){
    
    var el = this.renderer.createElement('div');
    this.renderer.addClass(el, color);
    this.renderer.addClass(el, 'dabba');
    this.renderer.appendChild(document.getElementById(containerId) as HTMLElement, el);
    this.renderer.setProperty(el, 'textContent', name);
     }
}
