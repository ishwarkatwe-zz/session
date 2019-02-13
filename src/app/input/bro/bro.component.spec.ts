import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroComponent } from './bro.component';

describe('BroComponent', () => {
  let component: BroComponent;
  let fixture: ComponentFixture<BroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
