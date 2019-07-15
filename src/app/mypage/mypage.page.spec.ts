import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypagePage } from './mypage.page';

describe('MypagePage', () => {
  let component: MypagePage;
  let fixture: ComponentFixture<MypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
