import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-userb',
  templateUrl: './userb.component.html',
  styleUrls: ['./userb.component.scss']
})
export class UserbComponent implements OnInit {
  msg:string;
  cur:number;
  tags:any;
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.cur = 12121212122;
    this.tags = '<h1>Hi i am here</h1>';
    this._appService.state.subscribe(res => {
      this.msg = res;
    });
  }

}
