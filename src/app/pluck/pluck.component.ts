import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {
users=[
{name:"John",Skill:"C#",job:{title:"Front End developer",exp:"2 years"}},
{name:"Sam",Skill:"Python", job:{title:"Flutter developer",exp:"2 years"}},
{name:"Deck",Skill:"Node",job:{title:"UI/UX developer",exp:"2 years"}},
{name:"Jesy",Skill:"React",job:{title:"API developer",exp:"2 years"}},
]
data:any;
data2:any;
data3:any;
ngOnInit(){
  // Ex: 1 using the MAP Operatot
  from(this.users).pipe(map(x=> x.Skill),toArray()).subscribe(res=>{
    console.log(res);
    this.data=res;
  });
  // Ex: 2 using the Pluck Operator
  from(this.users).pipe(pluck("name"),toArray()).subscribe(res=>{
    console.log(res);
    this.data2=res;
  });
   // Ex: 3 Nested Pluck Operator
   from(this.users).pipe(pluck("job","title"),toArray()).subscribe(res=>{
    console.log(res);
    this.data3=res;
  });
}
}
