import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from 'src/app/services/Interfaces';
import { categoryFilter } from '../shared/shared.module';
import groundUnitCategories from './groundUnitCategories.json';
import planeUnitCategories from './planeUnitCategories.json';

@Injectable()
export class UnitListService {
  private importedGroundFilters = groundUnitCategories;
  private importedPlaneFilters = planeUnitCategories;
  groundFilters: categoryFilter<Unit>[] = [{"name":"All","filterFunction":(unit:Unit) => true}];
  planeFilters: categoryFilter<Unit>[] = [{"name":"All","filterFunction":(unit:Unit) => true}];
  units: Unit[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  getUnits() {
    return this.http.get<Unit[]>("../../assets/unitinfo.json");
  }
  /**
   * Builds an array of categoryFilter object and saves it to the local filters object
   */
   buildGroundFilters():void {
    for (const filter of this.importedGroundFilters) {
      this.groundFilters.push({"name":filter.name,"filterFunction":(unit:Unit) => { 
        if(typeof unit.unitAttributes == "undefined") return false;
        return unit.unitAttributes.includes(filter.categoryValue);
      }})
      console.log(this.groundFilters);
      
    }
  }
  /**
   * Exports an array of filter object and builds one if necessary
   * @returns Array of categoryFilter objects
   */
  getGroundFilters(): categoryFilter<Unit>[] {
    if(this.groundFilters.length==1) {this.buildGroundFilters();}
    return this.groundFilters;
  }
  /**
   * Builds an array of categoryFilter object and saves it to the local filters object
   */
   buildPlaneFilters():void {
    for (const filter of this.importedPlaneFilters) {
      this.planeFilters.push({"name":filter.name,"filterFunction":(plane:Unit) => { 
        if(typeof plane.unitAttributes == "undefined") return false;
        return plane.unitAttributes.includes(filter.categoryValue);
      }})
    }
  }
  /**
   * Exports an array of filter object and builds one if necessary
   * @returns Array of categoryFilter objects
   */
  getPlaneFilters(): categoryFilter<Unit>[] {
    if(this.planeFilters.length==1) {this.buildPlaneFilters();}
    return this.planeFilters;
  }
}

