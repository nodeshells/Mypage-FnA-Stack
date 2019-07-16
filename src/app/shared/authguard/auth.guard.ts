import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SharedService} from '../shared.service';
import {AuthService} from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private sharedservice: SharedService,
      private router: Router,
      private authService: AuthService,
      private afs: AngularFirestore
  ) {
  }

  async checkAdmin(email: string) {
    try {
      // FireStoreに問い合わせてadminかチェックする
      const checkAdmin = await this.afs.collection('admins').doc(email).get().toPromise();
      if (checkAdmin.data) {
        return true;
      } else {
        await this.authService.doLogout();
        return false;
      }
    } catch (e) {
      await this.authService.doLogout();
      return false;
    }
  }

  canActivate(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      this.authService.checkLoginState().subscribe(async (LoginState) => {
        try {
          if (LoginState) {
            // ログイン済みだったら
            if (await this.checkAdmin(LoginState.email)) {
              resolve(true);
            } else {
              this.router.navigate(['/top']);
              resolve(false);
            }
          } else {
            // ログインしてログイン情報を確認
            const LoginInfo = await this.authService.doGoogleLogin();
            if (await this.checkAdmin(LoginInfo.user.email)) {
              resolve(true);
            } else {
              this.router.navigate(['/top']);
              resolve(false);
            }
          }
        } catch (e) {
          await this.authService.doLogout();
          this.router.navigate(['/top']);
          return resolve(false);
        }
      });
    });
  }
}
