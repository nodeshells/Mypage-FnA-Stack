import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class ProfilePreviewComponent implements OnInit {
  themeState$;

  constructor(private sharedService: SharedService) {
    this.themeState$ = this.sharedService.themesubject;
  }

  ngOnInit() {
  }

}
