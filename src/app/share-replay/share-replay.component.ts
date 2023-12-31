import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, filter, map, shareReplay, take } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})

export class ShareReplayComponent {
  constructor( private http : HttpClient){}
  url:string ="https://jsonplaceholder.typicode.com/todos";
  allTodos!:Observable<any>;
  completed!:Observable<any>;
  Incompleted!:Observable<any>;

  ngOnInit(){
    this.allTodos = this.http.get(this.url).pipe(shareReplay());
    this.completed = this.allTodos.pipe(map(x=>x.filter((data:any)=>data.completed==true)));
    this.Incompleted = this.allTodos.pipe(map(x=>x.filter((data:any)=>data.completed==false)));

  }
}
