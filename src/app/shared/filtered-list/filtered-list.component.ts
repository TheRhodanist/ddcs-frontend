import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
//import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { concatMap, Observable } from 'rxjs';
import { Unit } from 'src/app/services/Interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UnitListService } from 'src/app/data-view/unit-list/unit-list.service';


export interface categoryFilter {
  name:string,
  categoryKey:string,
  categoryValue:string,
}
export interface categoryFilterArray extends Array<categoryFilter> {
}
export interface columnFormat {
  columnDef: string;//'definition',
  header: string//'displayed header',
  cell: Function //(element: ElementType) => '${element.definition}',
}
@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListComponent implements OnInit{
  
    addOnBlur = true;
    //readonly separatorKeysCodes = [ENTER, COMMA] as const;
    filters: categoryFilterArray = [{name: 'Plane',categoryKey:'unitCategory',categoryValue: '0'}];

  
    @Input() data: any[] = [];
    fetchedUnits!: Observable<Unit[]>;
    filteredUnits!: Unit[];
    
    /*
    * Columns must match this format
    * {
    * columnDef: 'definition',
    * header: 'displayed header',
    * cell: (element: ElementType) => '${element.definition}',
    * }
    */
    columns: columnFormat[] = [
      {columnDef:'_id',header:'ID',cell: (element: any) => element._id},
      {columnDef:'warbondCost',header:'Cost',cell: (element: any) => element.warbondCost},
    ];
    displayedColumns = this.columns.map(c => c.columnDef);

    //displayedColumns: string[] = ['_id', 'natoName', 'warbondCost'];
    dataSource = new MatTableDataSource(this.data);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    constructor(
      private unitService: UnitListService,
    ) {
      
    }
    ngOnInit(): void {
      this.dataSource.data = this.data;
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    ngOnChanges(changes: SimpleChanges) {
      this.dataSource.data = this.data
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
      this.filteredUnits = this.data.filter(element => {
        //console.log(unit)
        if(element.hasOwnProperty("unitAttributes")) {
  
          //for each unit, go into its attributes
          let f = this.filters.filter( filter => {
            let hasFilteredAttribute = element.unitAttributes.includes(filter.name);
            return hasFilteredAttribute;
          }).length;
          return f>0;
          } else {
            return false;
          }
        });
        //console.log(this.filteredUnits)
    }
}
