import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Material imports
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
import {MatTabsModule} from '@angular/material/tabs';
import { FilteredListComponent } from './filtered-list/filtered-list.component';



@NgModule({
  declarations: [
    FilteredListComponent
  ],
  imports: [
    CommonModule,
    
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
  ],
  exports: [
    CommonModule,
    
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    FilteredListComponent,
  ]
})
export class SharedUIModule { }
