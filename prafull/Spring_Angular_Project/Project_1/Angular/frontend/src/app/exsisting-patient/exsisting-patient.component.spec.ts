import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsistingPatientComponent } from './exsisting-patient.component';

describe('ExsistingPatientComponent', () => {
  let component: ExsistingPatientComponent;
  let fixture: ComponentFixture<ExsistingPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExsistingPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExsistingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
