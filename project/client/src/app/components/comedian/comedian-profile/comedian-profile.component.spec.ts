import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedianProfileComponent } from './comedian-profile.component';

describe('ComedianProfileComponent', () => {
  let component: ComedianProfileComponent;
  let fixture: ComponentFixture<ComedianProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedianProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedianProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
