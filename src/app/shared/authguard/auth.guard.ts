import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from './user.service';
import {SharedService} from '../shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
      public afAuth: AngularFireAuth,
      public userService: UserService,
      private sharedservice: SharedService,
      private router: Router
  ) {
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
          .then(user => {
            // 許可したメールアドレスのみ通す(設定はenvironmentから)
            console.log(user);
            this.router.navigate(['/top']);
            return resolve(false);
          }, err => {
            this.router.navigate(['/top']);
            return resolve(false);
          });
    });
  }
}
