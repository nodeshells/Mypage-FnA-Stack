import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SharedService} from '../../shared.service';

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

  constructor(public shared: SharedService, private modalController: ModalController) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
