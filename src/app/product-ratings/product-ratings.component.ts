import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-ratings',
  templateUrl: './product-ratings.component.html',
  styleUrls: ['./product-ratings.component.scss']
})
export class ProductRatingsComponent implements OnInit {

  constructor() { }

  @Input() ratings = 0;
  filledArr = [];
  emptyArr = [];
  ngOnInit(): void {
    this.filledArr = new Array(Math.floor(this.ratings));
    this.emptyArr = new Array(5 - this.filledArr.length);
  }

}
