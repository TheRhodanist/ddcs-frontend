import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routing-components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'data', loadChildren: () => import('./data-view/data-view.module').then(m => m.DataViewModule) },

  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

