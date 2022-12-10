import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//App Components
import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';
//Angular Material
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DataViewComponent,
    UnitListComponent,
  ],
  imports: [
    CommonModule,
    DataViewRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
  ]
})
export class DataViewModule { }
