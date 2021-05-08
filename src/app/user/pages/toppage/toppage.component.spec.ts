import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToppageComponent } from './toppage.component';

describe('ToppageComponent', () => {
  let component: ToppageComponent;
  let fixture: ComponentFixture<ToppageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
