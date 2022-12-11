import { NgModule } from '@angular/core';
//App Components
import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { SharedUIModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { PlanesComponent } from './planes/planes.component';
import { WeaponsComponent } from './weapons/weapons.component';
//Angular Material


@NgModule({
  declarations: [
    DataViewComponent,
    UnitListComponent,
    OverviewComponent,
    PlanesComponent,
    WeaponsComponent,
  ],
  imports: [
    DataViewRoutingModule,
    SharedUIModule,
  ]
})
export class DataViewModule { 

}
