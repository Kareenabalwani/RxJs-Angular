import { Component } from '@angular/core';
import { UtilityServiceService } from '../utility-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent {
userlist1=[
  'Angular 1',
  'Angular 2',
  'Angular 3',
]
userlist2:any=[
  
]
userlist3:any=[

]
user2flag=true;
user3flag=true;
sub1!:Subscription;
sub2!:Subscription;

constructor(private _utilityServie:UtilityServiceService){}
user2Click(){
this.user2flag = !this.user2flag;
if(this.user2flag){
this.sub1.unsubscribe();
}else{
  this.sub1 =this._utilityServie.videoEmit.subscribe(res=>
    this.userlist2.push(res)
    );
}

}
user3Click(){
  this.user3flag = !this.user3flag;
  if(this.user3flag){
    this.sub2.unsubscribe();
    }else{
      this.sub2 =this._utilityServie.videoEmit.subscribe(res=>
      this.userlist3.push(res)
        );
    }
}
ngOnInit(){
this._utilityServie.videoEmit.subscribe((x)=>{
  console.log("from service:"+x);
  this.userlist1.push(x);

})
}
AddNewVideo(item:any){
    console.log(item.value);
    this._utilityServie.videoEmit.next(item.value);
}

}
