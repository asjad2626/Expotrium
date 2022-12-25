import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapsectionComponent } from './roadmapsection.component';

describe('RoadmapsectionComponent', () => {
  let component: RoadmapsectionComponent;
  let fixture: ComponentFixture<RoadmapsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
