import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class SkillPreviewComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
