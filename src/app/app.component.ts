import { Component } from '@angular/core';
import { ShopsService } from './shops.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zomato';
  constructor(private shopsService: ShopsService) {
  }
  get shopsData() {
    return this.shopsService.shopData;
  }
}
