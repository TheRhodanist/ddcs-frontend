import { NgModule } from '@angular/core';
//App Components
import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { SharedUIModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { UnitListService } from './unit-list.service';
import { WeaponListService } from './weapon-list/weapon-list.service';
//Angular Material

@NgModule({
  declarations: [
    DataViewComponent,
    UnitListComponent,
    OverviewComponent,
    PlaneListComponent,
    WeaponListComponent,
  ],
  imports: [DataViewRoutingModule, SharedUIModule],
  providers: [UnitListService, WeaponListService],
})
export class DataViewModule {}
