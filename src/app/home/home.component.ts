import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  name: String;
  arrNames: Array<string>;
  phone: number;
  data: any;
  sub: any;

  constructor(private _homeService: HomeService) {

  }

  ngOnInit() {
    console.log('init');
    this.loadData();
  }


  onFetch() {
    this.sub = this._homeService.loadAjaxData().subscribe(
      res => {
        this.data = res;
      }, err => {
        console.error(err);
      }
    );
  }

  loadData() {
    this.name = 'Stev Jobs';
    this.phone = 121212;
    this.arrNames = ['Audi', 'bmw', 'audi', 'maruti'];
  }

  ngOnChanges(changes): void {
    console.log('changes');
  }

  ngOnDestroy(): void {
    console.log('destroy');
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
