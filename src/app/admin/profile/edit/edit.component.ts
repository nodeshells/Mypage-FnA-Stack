import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  themeState$;

  constructor(private sharedService: SharedService) {
    this.themeState$ = this.sharedService.themesubject;
  }

  ngOnInit() {
  }

}
