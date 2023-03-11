import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
//import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { concatMap, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatChipListboxChange } from '@angular/material/chips';
import { categoryFilter, columnFormat } from '../shared.module';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
})
export class FilteredListComponent<T> implements OnInit {
  addOnBlur = true;
  @Input() columns: columnFormat[] = [
    { columnDef: '_id', header: 'ID', cell: (element: any) => element._id },
    {
      columnDef: 'warbondCost',
      header: 'Cost',
      cell: (element: any) => element.warbondCost,
    },
  ];
  @Input() data: any[] = [];
  @Input() filters: categoryFilter<T>[] = [];
  activeFilters: categoryFilter<T>[] = [];
  filteredData: any[] = [];
  isSpinnerHidden: boolean = true;

  /*
   * Columns must match this format
   * {
   * columnDef: 'definition',
   * header: 'displayed header',
   * cell: (element: ElementType) => '${element.definition}',
   * }
   */

  displayedColumns = this.columns.map((c) => c.columnDef);

  //displayedColumns: string[] = ['_id', 'natoName', 'warbondCost'];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  /**
   *
   */
  constructor() {}
  ngOnInit(): void {
    this.update();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.updateChips(['All']);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.update();
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
  /**
   * A function that is called when the state of the filter-chips changes
   * @param change the new chip calues
   */
  changedChips(change: MatChipListboxChange) {
    this.activeFilters = [];
    this.updateChips([change.value]);
    this.update();
  }
  updateChips(chips: any) {
    for (const chipName of chips) {
      this.activeFilters = this.activeFilters.concat(
        this.filters.filter((element) => element.name == chipName)
      );
    }
  }
  /**
   * A function that updates the currently displayed data according to the active filters
   */
  update(): void {
    this.dataSource.data = [];
    for (const filter of this.activeFilters) {
      //console.log(filter);

      // console.log(this.dataSource.data);

      this.dataSource.data = this.dataSource.data.concat(
        this.data.filter(filter.filterFunction)
      );
      // console.log(this.dataSource.data);
    }
  }

  // /**
  //  *
  //  * @param event
  //  */
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our filter
  //   if (value) {
  //     this.filters.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  //   this.updateFilteredUnits();
  // }

  // /**
  // *
  // * @param filter
  // */
  // remove(filter: categoryFilter): void {
  //   const index = this.filters.indexOf(filter);

  //   if (index >= 0) {
  //     this.filters.splice(index, 1);
  //   }
  //   this.updateFilteredUnits();
  // }

  // /**
  //  *
  //  * @param filter
  //  * @param event
  //  * @returns
  //  */
  // edit(filter: categoryFilter, event: MatChipEditedEvent) {
  //   const value = event.value.trim();

  //   // Remove filter if it no longer has a name
  //   if (!value) {
  //     this.remove(filter);
  //     return;
  //   }

  //   // Edit existing filter
  //   const index = this.filters.indexOf(filter);
  //   if (index > 0) {
  //     this.filters[index].name = value;
  //   }
  //   this.updateFilteredUnits();
  // }
  /**
   * Takes the input from an event-driven html-element and uses it as filter for the datasource
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Update our list of units with the currently active filters
   */
  updateFilteredUnits(): void {
    //console.log(this.units);
    this.filteredData = this.data.filter((element) => {
      //console.log(unit)
      // if(element.hasOwnProperty("unitAttributes")) {

      //   //for each unit, go into its attributes
      //   let f = this.filters.filter( filter => {
      //     let hasFilteredAttribute = element.unitAttributes.includes(filter.name);
      //     return hasFilteredAttribute;
      //   }).length;
      //   return f>0;
      //   } else {
      //     return false;
      //   }
      // });
      //console.log(this.filteredUnits)
      return element;
    });
  }
}
