import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitListComponent } from './bit-list.component';

describe('BitListComponent', () => {
  let component: BitListComponent;
  let fixture: ComponentFixture<BitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
