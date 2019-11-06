import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-buttons-indicators',
  templateUrl: './component-buttons-indicators.component.html',
  styleUrls: ['./component-buttons-indicators.component.scss']
})
export class ComponentButtonsIndicatorsComponent implements OnInit {
  public progress = 0;
  mode: string;
  value: number;

  constructor() { 
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  
  public color: string;

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  ngOnInit() {
    
  }

}
