import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
//import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { concatMap, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatChipListboxChange } from '@angular/material/chips';
import { categoryFilter } from '../shared.module';

export interface columnFormat {
  columnDef: string;//'definition',
  header: string//'displayed header',
  cell: Function //(element: ElementType) => '${element.definition}',
}
@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
})
export class FilteredListComponent<T> implements OnInit{
  
    addOnBlur = true;
    //readonly separatorKeysCodes = [ENTER, COMMA] as const;
    @Input() filters: categoryFilter<T>[] = [];
    activeFilters: categoryFilter<T>[] = [];
    @Input() data: any[] = [];
    filteredData: any[] = [];
    
    /*
    * Columns must match this format
    * {
    * columnDef: 'definition',
    * header: 'displayed header',
    * cell: (element: ElementType) => '${element.definition}',
    * }
    */
    @Input() columns: columnFormat[] = [
      {columnDef:'_id',header:'ID',cell: (element: any) => element._id},
      {columnDef:'warbondCost',header:'Cost',cell: (element: any) => element.warbondCost},
    ];
    displayedColumns = this.columns.map(c => c.columnDef);

    //displayedColumns: string[] = ['_id', 'natoName', 'warbondCost'];
    dataSource = new MatTableDataSource(this.data);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    /**
     * 
     */
    constructor(

    ) { }
    ngOnInit(): void {
      this.update();
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    ngOnChanges(changes: SimpleChanges) {
      this.update();
    }
    /**
     * A function that is called when the state of the filter-chips changes
     * @param change the new chip calues
     */
    changedChips(change: MatChipListboxChange) {

      
      
      this.activeFilters = [];
        for (const chipName of change.value) {
          this.activeFilters = this.filters.filter(element => element.name==chipName)
        }
        this.update();
    }
    /**
     * A function that updates the currently displayed data according to the active filters
     */
    update():void {
      console.log("updating");
      
      this.dataSource.data = this.data;
      for (const filter of this.activeFilters) {
        //console.log(filter);
        
        // console.log(this.dataSource.data);
        
        this.dataSource.data = this.dataSource.data.filter(filter.filterFunction)
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
     * 
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
      this.filteredData = this.data.filter(element => {
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
        return element;})
    }
}
