import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view.component';
import { OverviewComponent } from './overview/overview.component';
import { PlanesComponent } from './planes/planes.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  { path: '',component: DataViewComponent,children: [
    { path: '',redirectTo: 'overview', pathMatch: 'full'},
    { path: 'overview', component: OverviewComponent},
    { path: 'planes',component: PlanesComponent},
    { path: 'weapons',component: WeaponsComponent},
    { path: 'units',component: UnitListComponent},
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataViewRoutingModule { }
