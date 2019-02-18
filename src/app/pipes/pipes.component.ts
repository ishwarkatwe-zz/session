import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  arrData: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.arrData = ['audi', 'bmw', 'maruti', 'hyundai'];
  }

}
