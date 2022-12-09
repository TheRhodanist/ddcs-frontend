import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

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


import { DashboardComponent } from './routing-components/dashboard/dashboard.component';
import { DataComponent } from './routing-components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    DataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
