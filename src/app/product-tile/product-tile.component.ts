import { Component, OnInit, Input } from '@angular/core';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  constructor(private shopsService: ShopsService) { }

  @Input() shop;

  ngOnInit(): void {
  }

  handleBuyNowClick() {
    window.open(this.shop.image);
  }

}
