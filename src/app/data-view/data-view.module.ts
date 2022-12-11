import { NgModule } from '@angular/core';
//App Components
import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { SharedUIModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
//Angular Material


@NgModule({
  declarations: [
    DataViewComponent,
    UnitListComponent,
    OverviewComponent,
    PlaneListComponent,
    WeaponListComponent,
  ],
  imports: [
    DataViewRoutingModule,
    SharedUIModule,
  ]
})
export class DataViewModule { 

}
