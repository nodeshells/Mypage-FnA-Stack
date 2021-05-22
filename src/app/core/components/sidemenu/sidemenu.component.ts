import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
    sideMenu = [
        {labelName: 'トップ', iconName: 'home', routerLink: '/site/top'},
        {labelName: '管理者の自己紹介', iconName: 'happy', routerLink: '/site/profile'},
        {labelName: 'お楽しみ', iconName: 'sparkles', routerLink: '/site/clicker'},
        // TODO ブログの優先度が高い
        // {labelName: 'ブログ', iconName: 'text', routerLink: '/blog'},
        // { labelName: '職務経歴', iconName: 'filing', routerLink: '' },
        // { labelName: '技術プレビュー', iconName: 'construct', routerLink: '' }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
