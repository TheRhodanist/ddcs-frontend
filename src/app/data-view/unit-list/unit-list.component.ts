
import { Component,OnInit } from '@angular/core';
import { Unit } from 'src/app/services/Interfaces';
import { UnitListService } from '../unit-list.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {
  units:Unit[]=[];
  constructor (
    private unitListService:UnitListService,
  ) {}
  ngOnInit(): void {
    this.unitListService.getUnits()
    .subscribe(units => {
      this.units = units
    })
  }
}
