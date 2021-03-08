import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {PostpreviewComponent} from './postpreview.component';

describe('PostpreviewComponent', () => {
  let component: PostpreviewComponent;
  let fixture: ComponentFixture<PostpreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostpreviewComponent],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(PostpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
