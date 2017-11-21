import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitViewComponent } from './bit-view.component';

describe('BitViewComponent', () => {
  let component: BitViewComponent;
  let fixture: ComponentFixture<BitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
