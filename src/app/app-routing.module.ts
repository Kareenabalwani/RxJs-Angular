import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchmapSearchComponent } from './switchmap-search/switchmap-search.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';
import { CatchThrowErrorComponent } from './catch-throw-error/catch-throw-error.component';

const routes: Routes = [
  {path:"obs",component:ObservablesComponent,children:[
    {path:"list",component:AllComponent},
    {path:"form-event",component:FormEventComponent},

  ]},
  {path:'interval',component:IntervalComponent},
  // Another code
  {path:'pluck',component:PluckComponent},
  {path:'filter',component:FilterComponent},
  {path:'tap',component:TapComponent},
  {path:'take',component:TakeComponent},
  {path:'replay',component:ReplaySubjectComponent},
  {path:'mergemap',component:MergeMapComponent},
  {path:'concatmap',component:ConcatMapComponent},
  {path:'switchmap',component:SwitchMapComponent},
  {path:'switchmapsearch',component:SwitchmapSearchComponent},
  {path:'sharereplay',component:ShareReplayComponent},
  {path:'combinelatest',component:CombineLatestComponent},
  {path:'zipforkjoin',component:ZipForkJoinComponent},
  {path:'catchthrow',component:CatchThrowErrorComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
