import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view.component';
import { UnitListComponent } from './unit-list/unit-list.component';

const routes: Routes = [
  { path: 'data/overview', component: DataViewComponent},
  { path: 'data/units', component: UnitListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataViewRoutingModule { }
