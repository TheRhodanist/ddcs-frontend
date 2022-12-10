import { NgModule } from '@angular/core';
//App Components
import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { SharedUIModule } from '../shared/shared.module';
//Angular Material


@NgModule({
  declarations: [
    DataViewComponent,
    UnitListComponent,
  ],
  imports: [
    DataViewRoutingModule,
    SharedUIModule,
  ]
})
export class DataViewModule { 

}
