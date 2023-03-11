import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view.component';
import { OverviewComponent } from './overview/overview.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

const routes: Routes = [
  {
    path: '',
    component: DataViewComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'planes', component: PlaneListComponent },
      { path: 'weapons', component: WeaponListComponent },
      { path: 'units', component: UnitListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataViewRoutingModule {}
