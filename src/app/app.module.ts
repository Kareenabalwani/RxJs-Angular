import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';
import { CatchThrowErrorComponent } from './catch-throw-error/catch-throw-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    AllComponent,
    FormEventComponent,
    IntervalComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    ReplaySubjectComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    SwitchmapSearchComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipForkJoinComponent,
    CatchThrowErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
