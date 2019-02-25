import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() list: any;
  @Output() selected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  load(list) {
    this.selected.emit(list);
  }
}
