import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  results: any;

  constructor(private _postsService: PostsService) {
  }

  ngOnInit() {
  }

  onLoad() {
    this._postsService.fetchData().subscribe(res => {
      this.results = res;
    }, err => {

    });
  }

  onChoose(val) {
    alert('User selected = ' + val['name']);
  }
}
