import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routing-components/dashboard/dashboard.component';
import { DataComponent } from './routing-components/data/data.component';

const routes: Routes = [
  { path: 'data', component: DataComponent},

  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

