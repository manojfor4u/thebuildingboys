import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDeeElevationComponent } from './three-dee-elevation.component';

describe('ThreeDeeElevationComponent', () => {
  let component: ThreeDeeElevationComponent;
  let fixture: ComponentFixture<ThreeDeeElevationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDeeElevationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDeeElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
