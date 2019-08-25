import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceviComponent } from './ricevi.component';

describe('RiceviComponent', () => {
  let component: RiceviComponent;
  let fixture: ComponentFixture<RiceviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
