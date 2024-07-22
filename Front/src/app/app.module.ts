import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphicComponent } from './graphic/graphic.component';
import { PricesComponent } from './prices/prices.component';
import { NemosComponent } from './nemos/nemos.component';
import { DataService } from './shared/data.service';
import { ViewComponent } from './view/view.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    PricesComponent,
    NemosComponent,
    ViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
