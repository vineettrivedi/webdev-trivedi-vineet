import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticLoginComponent } from './critic-login.component';

describe('CriticLoginComponent', () => {
  let component: CriticLoginComponent;
  let fixture: ComponentFixture<CriticLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
