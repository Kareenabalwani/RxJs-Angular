import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';

const routes: Routes = [
  {path:"obs",component:ObservablesComponent,children:[
    {path:"list",component:AllComponent},
    {path:"form-event",component:FormEventComponent},

  ]},
  {path:'interval',component:IntervalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
