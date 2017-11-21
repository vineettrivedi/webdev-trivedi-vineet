import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCreateComponent } from './bit-create.component';

describe('BitCreateComponent', () => {
  let component: BitCreateComponent;
  let fixture: ComponentFixture<BitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
