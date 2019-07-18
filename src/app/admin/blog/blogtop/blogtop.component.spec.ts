import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtopComponent } from './blogtop.component';

describe('BlogtopComponent', () => {
  let component: BlogtopComponent;
  let fixture: ComponentFixture<BlogtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogtopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
