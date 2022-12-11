import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/services/Interfaces';
import { categoryFilter, columnFormat } from 'src/app/shared/shared.module';
import { UnitListService } from '../unit-list.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {
  
  units:Unit[]=[];
  filters: categoryFilter<Unit>[] = [];
  columns: columnFormat[] = [
    {columnDef:'_id',header:'ID',cell: (element: any) => element._id},
    {columnDef:'warbondCost',header:'Cost',cell: (element: any) => element.warbondCost},
  ];

  constructor (
    private unitListService:UnitListService,
  ) {}
  ngOnInit(): void {
    this.unitListService.getUnits()
    .subscribe(units => {
      this.units = units.filter( unit => ![0,1].includes(unit.unitCategory));
    })
    this.filters = this.unitListService.getGroundFilters();
  }
}
