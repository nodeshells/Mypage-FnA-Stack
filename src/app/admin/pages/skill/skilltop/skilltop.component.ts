import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-skilltop',
  templateUrl: './skilltop.component.html',
  styleUrls: ['./skilltop.component.scss'],
})
export class SkilltopComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
