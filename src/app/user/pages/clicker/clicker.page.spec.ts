import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerPage } from './clicker.page';

describe('ClickerPage', () => {
  let component: ClickerPage;
  let fixture: ComponentFixture<ClickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
