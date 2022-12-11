import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Weapon } from 'src/app/services/Interfaces';
import { categoryFilter } from 'src/app/shared/shared.module';
import weaponCategories from "./weaponCategories.json"

@Injectable()
export class WeaponListService {
  weapons: Weapon[] = [];
  private importedFilters = weaponCategories;
  filters: categoryFilter<Weapon>[] = [{"name":"All","filterFunction":(weapon:Weapon) => true}];
  constructor(
    private http: HttpClient,
  ) { }

  getWeapons() {
    return this.http.get<Weapon[]>("../../assets/weaponcost_attributes.json")
  }
  /**
   * Builds an array of categoryFilter object and saves it to the local filters object
   */
   buildFilters():void {
    for (const filter of this.importedFilters) {
      this.filters.push({"name":filter.name,"filterFunction":(weapon:Weapon) => { 
        return weapon.guidanceType == +filter.categoryValue;
      }})
    }
  }
  /**
   * Exports an array of filter object and builds one if necessary
   * @returns Array of categoryFilter objects
   */
  getFilters(): categoryFilter<Weapon>[] {
    if(this.filters.length==1) {this.buildFilters();}
    return this.filters;
  }
}