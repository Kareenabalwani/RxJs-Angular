import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapSearchComponent } from './switchmap-search.component';

describe('SwitchmapSearchComponent', () => {
  let component: SwitchmapSearchComponent;
  let fixture: ComponentFixture<SwitchmapSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchmapSearchComponent]
    });
    fixture = TestBed.createComponent(SwitchmapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
