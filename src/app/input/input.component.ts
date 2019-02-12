import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name: String;

  constructor() {
  }

  ngOnInit() {
    this.name = 'Stev Jobs';
  }

  newValueEmitted(e) {
    this.name = e;
  }

}
