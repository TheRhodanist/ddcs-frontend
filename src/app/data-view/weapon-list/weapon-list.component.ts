import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/services/Interfaces';
import { categoryFilter, columnFormat } from 'src/app/shared/shared.module';
import { WeaponListService } from './weapon-list.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit{
  weapons:Weapon[] = [];
  filters: categoryFilter<Weapon>[] = [];
  columns: columnFormat[] = [
    {columnDef:'displayName',header:'Name',cell: (element: any) => {
      return element.displayName ? element.displayName:element._id
      }
    },
    {columnDef:'warbondKillMultiplier',header:'Multiplier',cell: (element: any) => element.warbondKillMultiplier},
    {columnDef:'warbondCost',header:'Cost',cell: (element: any) => element.warbondCost},
  ];
  constructor(
    private weaponListService: WeaponListService,
  ) {}
  ngOnInit(): void {
      this.weaponListService.getWeapons().subscribe( weapons =>
        this.weapons = weapons
      );
      this.filters = this.weaponListService.getFilters();
  }
  
  
}
