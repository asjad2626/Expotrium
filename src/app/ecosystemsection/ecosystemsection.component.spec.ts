import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemsectionComponent } from './ecosystemsection.component';

describe('EcosystemsectionComponent', () => {
  let component: EcosystemsectionComponent;
  let fixture: ComponentFixture<EcosystemsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcosystemsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcosystemsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
