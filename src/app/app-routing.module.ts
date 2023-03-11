import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routing-components/dashboard/dashboard.component';
import { CampaignChooserComponent } from './campaign-view/campaign-chooser/campaign-chooser.component';
import { CampaignDetailViewComponent } from './campaign-view/campaign-detail/campaign-detail-view/campaign-detail-view.component';

const routes: Routes = [
  {
    path: 'data',
    loadChildren: () =>
      import('./data-view/data-view.module').then((m) => m.DataViewModule),
  },
  { path: 'campaigns', component: CampaignChooserComponent },
  { path: 'campaign/:id', component: CampaignDetailViewComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
