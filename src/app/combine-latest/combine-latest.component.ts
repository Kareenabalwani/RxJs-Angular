import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements AfterViewInit{
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

const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event=>event.target.value));

const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck ('target','value'));

//ex:-1 combineLatest

combineLatest(nameObs,colorObs).subscribe(([name,color])=>
{
  console.log(name,color);
  this.createBox(name,color,"elContainer")
});

  // ex:2 WithLatestFrom
  nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color])=>
  {
    console.log(name,color);
    this.createBox(name,color,"elContainer2")
  });
  
  }

  
   createBox(name:string,color:string,containerId:string){
  //  var el= document.createElement('div');

   
  //  el.classList.add(color);
  //  el.classList.add('dabba');
  
  // document.getElementById(containerId)?.appendChild(el);
  // el.textContent = name; 
//above lines didn't work
  var el = this.renderer.createElement('div');
  this.renderer.addClass(el, color);
  this.renderer.addClass(el, 'dabba');
  this.renderer.appendChild(document.getElementById(containerId) as HTMLElement, el);
  this.renderer.setProperty(el, 'textContent', name);
   }

}
