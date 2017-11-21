import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedianLoginComponent } from './comedian-login.component';

describe('ComedianLoginComponent', () => {
  let component: ComedianLoginComponent;
  let fixture: ComponentFixture<ComedianLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedianLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
