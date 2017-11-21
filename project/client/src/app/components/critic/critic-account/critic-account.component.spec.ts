import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticAccountComponent } from './critic-account.component';

describe('CriticAccountComponent', () => {
  let component: CriticAccountComponent;
  let fixture: ComponentFixture<CriticAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
