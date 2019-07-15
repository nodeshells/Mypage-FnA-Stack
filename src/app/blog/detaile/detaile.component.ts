import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.scss'],
})
export class DetaileComponent implements OnInit {
  themeSubject$;

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
