import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInspectionListComponent } from './car-inspection-list.component';

describe('CarInspectionListComponent', () => {
  let component: CarInspectionListComponent;
  let fixture: ComponentFixture<CarInspectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarInspectionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarInspectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
