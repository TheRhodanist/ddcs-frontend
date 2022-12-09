import { Component, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { concatMap, Observable } from 'rxjs';
import { Unit } from 'src/app/services/Interfaces';
import { UnitinfoService} from '../../services/unitinfo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Filter {
  name:string;
}

@Component({
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit{
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filters: Filter[] = [{name: 'Plane'}];

  units: Unit[] = [];
  fetchedUnits!: Observable<Unit[]>;
  filteredUnits!: Unit[];

  displayedColumns: string[] = ['_id', 'natoName', 'warbondCost'];
  dataSource = new MatTableDataSource(this.units);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private unitService: UnitinfoService,
  ) {
    
  }
  ngOnInit(): void {
    this.fetchedUnits = this.unitService.fetchUnits();
    this.fetchedUnits.subscribe(units => {
      this.units = units;
      this.dataSource.data = units;
    })
    this.updateFilteredUnits();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * 
   * @param event 
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our filter
    if (value) {
      this.filters.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
    this.updateFilteredUnits();
  }

  /**
  * 
  * @param filter 
  */
  remove(filter: Filter): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
    this.updateFilteredUnits();
  }

  /**
   * 
   * @param filter 
   * @param event 
   * @returns 
   */
  edit(filter: Filter, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove filter if it no longer has a name
    if (!value) {
      this.remove(filter);
      return;
    }

    // Edit existing filter
    const index = this.filters.indexOf(filter);
    if (index > 0) {
      this.filters[index].name = value;
    }
    this.updateFilteredUnits();
  }
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
    this.filteredUnits = this.units.filter(unit => {
      //console.log(unit)
      if(unit.hasOwnProperty("unitAttributes")) {

        //for each unit, go into its attributes
        let f = this.filters.filter( filter => {
          let hasFilteredAttribute = unit.unitAttributes.includes(filter.name);
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
