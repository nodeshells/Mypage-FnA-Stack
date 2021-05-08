import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/authguard/user.service';
import {Subject} from 'rxjs';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  user_photo_url = '';
  user_name = '';
  themeState$: Subject<String>;

  constructor(private user: UserService, private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
    // this.getUserdata();
  }

  async getUserdata() {
    const user = await this.user.getCurrentUser();
    this.user_photo_url = user.photoURL;
    this.user_name = user.displayName;
  }

}
