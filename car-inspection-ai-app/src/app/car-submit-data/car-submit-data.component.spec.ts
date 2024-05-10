import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubmitDataComponent } from './car-submit-data.component';

describe('CarSubmitDataComponent', () => {
  let component: CarSubmitDataComponent;
  let fixture: ComponentFixture<CarSubmitDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarSubmitDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarSubmitDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
