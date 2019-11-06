import 'hammerjs';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInputComponent } from './component-input/component-input.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentchartComponent } from './componentchart/componentchart.component';
import { ComponentButtonsIndicatorsComponent } from './component-buttons-indicators/component-buttons-indicators.component'

@NgModule({
  declarations: [ComponentInputComponent, ComponentchartComponent, ComponentButtonsIndicatorsComponent],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatChipsModule, 
    MatOptionModule, 
    MatGridListModule, 
    MatProgressBarModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatMenuModule, 
    MatDialogModule, 
    MatSnackBarModule, MatSelectModule, MatInputModule, 
    MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule,
     MatProgressSpinnerModule, MatTabsModule,MatListModule,
     BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatChipsModule, MatOptionModule, MatGridListModule, 
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, 
    MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, 
    MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, 
    MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule,
    ComponentInputComponent,ComponentchartComponent,ComponentButtonsIndicatorsComponent
  ],
})
export class ComponentMaterialModule { }
