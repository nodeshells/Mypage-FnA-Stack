import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.html',
  styleUrls: ['./postpreview.component.scss'],
})
export class PostpreviewComponent implements OnInit {
  themeState$;
  date = new Date();

  @Input() title: string;
  @Input() mdString: string;
  @Input() tags: string[];

  constructor(private shared: SharedService, private modalController: ModalController) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  formatDate(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const day = '日月火水木金土'.charAt(date.getDay());
    return `${y}年${m}月${d}日 (${day})`;
  }

}
