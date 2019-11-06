import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.scss']
})
export class ComponentInputComponent implements OnInit  {
  isDarkTheme = false;
  lastDialogResult: string;
  value: number;

  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Phở', rating: 'Pho' },
    { name: 'Bún', rating: 'Bun' },
    { name: 'Bánh tráng trộn', rating: 'banhtrang' },
  ];

  public selectedValue: string;

  public games = [
    {value: 'rts-0', viewValue: 'Starcraft'},
    {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
    {value: 'fps-2', viewValue: 'Doom'}
  ];

  public slider = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': true
  };
  public tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {
    // Update the value for the progress-bar on an interval.
   
  }
 
  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
  get tickInterval(): number | 'auto' {
    return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
  }
  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }

  ngOnInit() {

  }
}