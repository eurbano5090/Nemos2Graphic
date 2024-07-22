import { Component, OnInit, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {DataService} from '../shared/data.service'

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  @Input() nemoSelected: '';
  public historical: [];
  constructor(public dataService: DataService) { }
  ngOnChanges(changes: SimpleChanges) {
    this.getDataNemo(this.nemoSelected);
}
  ngOnInit(): void {
  }
  getDataNemo(data: string){
    this.dataService.getHistoricalNemo(data).subscribe(resp=>{
      this.historical = [];
      if(Object.keys(resp).length > 0){
        this.historical = resp.historical;
      }    
    })
  }

}
