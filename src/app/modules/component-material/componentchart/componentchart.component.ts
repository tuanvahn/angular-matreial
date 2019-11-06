import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-componentchart',
  templateUrl: './componentchart.component.html',
  styleUrls: ['./componentchart.component.scss']
})
export class ComponentchartComponent implements OnInit {
Title ='Chart in Angular';
LineChart = [];
BarChart = [];
  constructor() { }

  ngOnInit() {
    this.LineChart.push(new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: ["T1", "T2","T3", "T4", "T5", "T6"],  

        datasets: [  
          {  
            label: "Thống kê lượng người truy cập website",
            data: [123,90,321,92,372,678, 98, 781,156],  
            borderColor: '#3cb371',
            backgroundColor:['#eee'], 
            borderWidth: 1,
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    }));  

    this.LineChart.push(new Chart('barChart', {  
      type: 'bar',  
      data: {  
        labels: ["T1", "T2","T3", "T4", "T5", "T6"],  

        datasets: [  
          {  
            label: "Thống kê lượng người truy cập website",
            data: [123,90,321,92,372,678, 98, 781,156],  
            borderColor: '#3cb371',
            backgroundColor:['red','green','#ccc','violet','grey','aquamarine'], 
            borderWidth: 1,
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    }));  
}
}
