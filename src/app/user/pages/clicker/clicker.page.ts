import {AfterViewInit, Component, OnInit} from '@angular/core';
import party from 'party-js';
import {Animation, AnimationController} from '@ionic/angular';

@Component({
    selector: 'app-clicker',
    templateUrl: './clicker.page.html',
    styleUrls: ['./clicker.page.scss'],
})
export class ClickerPage implements OnInit, AfterViewInit {
    cookieButton: HTMLElement;
    clickCookieAnimation: Animation;
    counter = 0;

    constructor(private animationCtrl: AnimationController) {
    }

    ngOnInit() {
        this.initAnimation();
    }

    ngAfterViewInit() {
        this.cookieButton = document.querySelector('#cookieButton') as HTMLElement;
    }

    clickCookie() {
        this.counter++;
        party.sparkles(this.cookieButton);
        this.clickCookieAnimation.play();
    }

    initAnimation() {
        // ボタンがクリックされた時のアニメーション
        this.clickCookieAnimation = this.animationCtrl.create().addElement(document.querySelector('#cookieButton'))
            .duration(150)
            .keyframes([
                {offset: 0, transform: 'scale(1)'},
                {offset: 0.25, transform: 'scale(0.95)'},
                {offset: 0.5, transform: 'scale(0.9)'},
                {offset: 1, transform: 'scale(1)'}
            ]);
    }

}
