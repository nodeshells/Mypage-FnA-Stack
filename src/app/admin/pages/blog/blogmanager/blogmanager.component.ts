import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-blogmanager',
  templateUrl: './blogmanager.component.html',
  styleUrls: ['./blogmanager.component.scss'],
})
export class BlogmanagerComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
