import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../shared/data.service'


@Component({
  selector: 'app-nemos',
  templateUrl: './nemos.component.html',
  styleUrls: ['./nemos.component.css']
})
export class NemosComponent implements OnInit {
  public nemos: [];
  @Output()
  nemoSelected = new EventEmitter<string>();

  constructor(public dataService: DataService
    ) { }

  ngOnInit(): void {
    this.dataService.getSymbols().subscribe(resp=>{
      this.nemos = [];
      this.nemos = resp.symbolsList;
    })
  }
  onClick(data: string){
    this.nemoSelected.emit(data);
  }

}
