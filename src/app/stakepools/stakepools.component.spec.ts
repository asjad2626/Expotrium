import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakepoolsComponent } from './stakepools.component';

describe('StakepoolsComponent', () => {
  let component: StakepoolsComponent;
  let fixture: ComponentFixture<StakepoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakepoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakepoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
