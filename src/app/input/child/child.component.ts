import {Component, EventEmitter, Input, Output, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() childName;

  @Output() output = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  onClick() {
    this.output.emit(this.childName);
  }

  loadData() {
   // console.log('Child need to be updated');
  }

  ngOnChanges(changes) {


    // if (changes.childName &&
    //   changes.childName.currentValue !== changes.childName.previousValue) {
    //   this.loadData();
    // }
  }
}
