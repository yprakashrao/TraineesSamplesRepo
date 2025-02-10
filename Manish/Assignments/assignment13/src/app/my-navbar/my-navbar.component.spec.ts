import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavbarComponent } from './my-navbar.component';

describe('MyNavbarComponent', () => {
  let component: MyNavbarComponent;
  let fixture: ComponentFixture<MyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
