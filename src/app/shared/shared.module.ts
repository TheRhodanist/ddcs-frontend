import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [FilteredListComponent, EventListComponent],
  imports: [
    CommonModule,

    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,

    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    FilteredListComponent,
    EventListComponent,
    FormsModule,
  ],
})
export class SharedUIModule {}
export interface categoryFilter<T> {
  name: string;
  filterFunction: (arg1: T) => boolean;
}
export interface columnFormat {
  columnDef: string; //'definition',
  header: string; //'displayed header',
  cell: Function; //(element: ElementType) => '${element.definition}',
  value?: string;
}
