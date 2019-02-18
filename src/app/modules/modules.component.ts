import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  arrData: any;

  constructor() {
  }

  ngOnInit() {
    this.arrData = ['audi', 'bmw', 'hyundai', 'ford', 'maruti', 'honda'];
  }

}
