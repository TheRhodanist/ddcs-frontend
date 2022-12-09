import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Unit } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UnitinfoService {
  units: Unit[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  getUnits() {
    // if(this.units.length==0) {
    //   this.units = this.fetchUnits();
    // }
    return this.units;
  }

  fetchUnits() {
    return this.http.get<Unit[]>("../../assets/unitinfo.json")
  }
}
