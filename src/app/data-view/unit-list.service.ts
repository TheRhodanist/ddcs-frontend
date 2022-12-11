import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,filter,map,mergeMap,of,tap } from 'rxjs';
import { Unit } from 'src/app/services/Interfaces';

@Injectable()
export class UnitListService {
  units: Unit[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  getUnits() {
    return this.http.get<Unit[]>("../../assets/unitinfo.json").pipe(
      tap(_=>console.log("fetched"))
    )
  }
}

