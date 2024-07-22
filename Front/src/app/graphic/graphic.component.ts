import { Component, OnInit, ViewChild, Input, SimpleChanges  } from '@angular/core';
import {DataService} from '../shared/data.service'
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  @Input() nemoSelected: '';
  //Variables utilizadas para gestión
  public historical: [];
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'date'},
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor(public dataService: DataService)  { }
  ngOnChanges(changes: SimpleChanges) {
    this.getDataGrahpic(this.nemoSelected);
}

  ngOnInit(): void {
  }
  getDataGrahpic(data: string){

    this.lineChartData = [
      { data: [], label: 'Stock Price'},
    ];
    this.lineChartLabels = [];
    
    this.dataService.getHistoricalNemo(data).subscribe(resp=>{
      this.historical = [];
      if(Object.keys(resp).length > 0){
        this.historical = resp.historical;
      this.historical.forEach(e => {
        let value = {date: '', close: 0 };
        value = e;
        value.date = value.date.substring(0,7);
        
        for(let i of this.lineChartData){
          i.data.push(value.close);
          this.lineChartLabels.push(value.date);
      }
      });
      }
    })
  }

}
