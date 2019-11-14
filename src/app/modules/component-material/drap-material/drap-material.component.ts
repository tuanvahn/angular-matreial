import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drap-material',
  templateUrl: './drap-material.component.html',
  styleUrls: ['./drap-material.component.scss']
})
export class DrapMaterialComponent implements OnInit {

  movies = [
    'Khóa học ngắn hạn - Wordpress',
    'Khóa học ngắn hạn - Front-end',
    'Khóa học dài hạn - Fullstack',
    'Khóa học - Quản trị mạng',
    'Khóa học - Thiết đồ hoạc UI/UX',
    'Khóa học - Lập trình web'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}
