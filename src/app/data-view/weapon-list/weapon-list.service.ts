import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { catchError,filter,map,mergeMap,of,tap } from 'rxjs';
import { Weapon } from 'src/app/services/Interfaces';
import { categoryFilter } from 'src/app/shared/shared.module';
import weaponCategories from "./weaponCategories.json"

@Injectable()
export class WeaponListService {
  weapons: Weapon[] = [];
  private importedFilters = weaponCategories;
  filters: categoryFilter<Weapon>[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  getWeapons() {
    return this.http.get<Weapon[]>("../../assets/weaponcost_attributes.json").pipe(
      tap(_=>console.log("weapons fetched"))
    )
  }
  /**
   * 
   */
   buildFilters():void {
    for (const filter of this.importedFilters) {
      this.filters.push({"name":filter.name,"filterFunction":(weapon:Weapon) => { 
        return weapon.guidanceType == +filter.categoryValue;
      }})
    }
  }
  getFilters() {
    if(this.filters.length==0) {this.buildFilters();}
    return this.filters;
  }
}