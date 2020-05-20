import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductRatingsComponent } from './product-ratings/product-ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTileComponent,
    ProductRatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
