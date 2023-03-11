import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/shared/Interfaces';
import { categoryFilter, columnFormat } from 'src/app/shared/shared.module';
import { UnitListService } from '../unit-list.service';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.scss'],
})
export class PlaneListComponent implements OnInit {
  isLoading: boolean = false;
  planes: Unit[] = [];
  filters: categoryFilter<Unit>[] = [];
  columns: columnFormat[] = [
    { columnDef: '_id', header: 'ID', cell: (element: any) => element._id },
    {
      columnDef: 'warbondCost',
      header: 'Cost',
      cell: (element: any) => element.warbondCost,
    },
  ];
  constructor(private unitListService: UnitListService) {}

  /**
   * Fetches the plane array and sorts it to only display planes
   */
  ngOnInit(): void {
    this.isLoading = true;
    this.unitListService.getUnits().subscribe((units) => {
      this.planes = units.filter((unit) => [0, 1].includes(unit.unitCategory));
      this.isLoading = false;
    });
    this.filters = this.unitListService.getPlaneFilters();
  }
}
