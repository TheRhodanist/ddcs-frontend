import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/services/Interfaces';
import { categoryFilter } from 'src/app/shared/shared.module';
import { WeaponListService } from './weapon-list.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit{
  weapons:Weapon[] = [];
  filters: categoryFilter<Weapon>[] = [];
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
