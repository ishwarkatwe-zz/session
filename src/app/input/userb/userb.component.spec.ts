import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbComponent } from './userb.component';

describe('UserbComponent', () => {
  let component: UserbComponent;
  let fixture: ComponentFixture<UserbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
