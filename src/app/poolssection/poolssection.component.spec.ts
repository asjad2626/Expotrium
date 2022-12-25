import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolssectionComponent } from './poolssection.component';

describe('PoolssectionComponent', () => {
  let component: PoolssectionComponent;
  let fixture: ComponentFixture<PoolssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolssectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
