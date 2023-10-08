import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

users=[
  {id:1,name:"Akanksha",gender:"Female"},
  {id:2,name:"Jerry",gender:"Male"},
  {id:3,name:"Peter",gender:"Male"},
  {id:4,name:"Henry",gender:"Male"},
  {id:5,name:"Rhea",gender:"Female"},
  {id:6,name:"Alexandar",gender:"Male"},
  {id:7,name:"Ritviz",gender:"Female"},
  {id:8,name:"UV",gender:"Female"},

]
data:any;
data2:any;
data3:any;
ngOnInit(){
  const source = from(this.users);

//Ex:1 Filter by Name length
source.pipe(filter(x=> x.name.length>=6),toArray()).subscribe(data=>{
  console.log(data);
  this.data=data;
});

//Ex:2 Filter by Gender 
source.pipe(filter(x=> x.gender=="Female"),toArray()).subscribe(data=>{
  console.log(data);
  this.data2=data;
});

//Ex:3 Filter by Nth Item 
source.pipe(filter(x=> x.id<=5),toArray()).subscribe(data=>{
  console.log(data);
  this.data3=data;
});


}

}
