import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check component name',()=>{
    expect(component.componentName).toBe("home")
  })
  

    it('should return a number', ()=>{
     const fixture=new HomeComponent().sum()
     expect(typeof  fixture).toBe('number');
    })

});
