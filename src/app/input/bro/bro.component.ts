import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bro',
  templateUrl: './bro.component.html',
  styleUrls: ['./bro.component.scss']
})
export class BroComponent implements OnInit {
  msg:string;
  constructor() { }

  ngOnInit() {
  }


  public sayName() { console.log('called****')
    return 'Hello i am bro';
  }

}
