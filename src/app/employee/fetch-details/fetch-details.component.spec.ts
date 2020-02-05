import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDetailsComponent } from './fetch-details.component';

describe('FetchDetailsComponent', () => {
  let component: FetchDetailsComponent;
  let fixture: ComponentFixture<FetchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
