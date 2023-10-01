import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityServiceService } from 'src/app/utility-service.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})

export class FormEventComponent implements AfterViewInit{
  constructor(private utitlityService:UtilityServiceService) {
    
  }
  @ViewChild('addBtn')addBtn:ElementRef | undefined; 
  ngAfterViewInit(): void {
    if(this.addBtn){
      let count=0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>
      {
        console.log("video",++count)
        this.utitlityService.print(count,"ul-id");
      });
    }
  }
 

}
