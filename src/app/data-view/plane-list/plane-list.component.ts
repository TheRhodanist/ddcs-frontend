import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/services/Interfaces';
import { UnitListService } from '../unit-list.service';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.scss'],
})
export class PlaneListComponent implements OnInit{
  planes: Unit[] = [];
  constructor(
    private unitListService: UnitListService
  ) {}
  /**
   * Fetches the plane array and sorts it to only display planes
   */
  ngOnInit(): void {
    this.unitListService.getUnits()
    .subscribe(units => {
      this.planes = units.filter( plane => {
        return plane.unitCategory==0;
      });
    
      
    })
  }

}
