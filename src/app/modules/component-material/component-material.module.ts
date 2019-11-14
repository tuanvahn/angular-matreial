import 'hammerjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule } from '@angular/material';
import { DrapMaterialComponent } from './drap-material/drap-material.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ComponentInputComponent, ComponentchartComponent, ComponentButtonsIndicatorsComponent, DrapMaterialComponent],
  imports: [
    CalendarModule,
    MatDatepickerModule,
    DragDropModule,
    CommonModule,
    MatNativeDateModule,
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
     MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatChipsModule, MatOptionModule, MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    DragDropModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule,
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, 
    MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, 
    MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, 
    MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule,
    ComponentInputComponent,ComponentchartComponent,ComponentButtonsIndicatorsComponent,DrapMaterialComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentMaterialModule { }
