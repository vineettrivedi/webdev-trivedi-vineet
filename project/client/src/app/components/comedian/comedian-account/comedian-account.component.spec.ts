import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedianAccountComponent } from './comedian-account.component';

describe('ComedianAccountComponent', () => {
  let component: ComedianAccountComponent;
  let fixture: ComponentFixture<ComedianAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedianAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedianAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
