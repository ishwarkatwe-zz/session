import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BroComponent} from './bro/bro.component';
import {AppService} from '../app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

  name: String;
  saying: String;

  @ViewChild(BroComponent) _bro: BroComponent;

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.name = 'Stev Jobs';


    this._appService.state.subscribe(res => {
      console.log(res);
      this.name = res;
    });


  }

  brodcast() {
    this._appService.setData(new Date());
  }

  ngAfterViewInit(): void {

    //console.log(this._bro.sayName());

    this._bro.msg = 'setting from parent';


    this.saying = this._bro.sayName();

  }

  newValueEmitted(e) {
    this.name = e;
  }

}
