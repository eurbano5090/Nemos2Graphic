import { Component, OnInit } from '@angular/core';
import { PricesComponent } from '../prices/prices.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
  nemoSelectedSend: string;
  ngOnInit(): void {
  }
  getNemo(nemoSelected){
    this.nemoSelectedSend = nemoSelected;
  }

}
