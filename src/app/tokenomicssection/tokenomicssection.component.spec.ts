import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenomicssectionComponent } from './tokenomicssection.component';

describe('TokenomicssectionComponent', () => {
  let component: TokenomicssectionComponent;
  let fixture: ComponentFixture<TokenomicssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenomicssectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenomicssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
