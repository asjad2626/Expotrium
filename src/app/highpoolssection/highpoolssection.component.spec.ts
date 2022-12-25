import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpoolssectionComponent } from './highpoolssection.component';

describe('HighpoolssectionComponent', () => {
  let component: HighpoolssectionComponent;
  let fixture: ComponentFixture<HighpoolssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighpoolssectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighpoolssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
