import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  themeSubject$;

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
