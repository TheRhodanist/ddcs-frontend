import { Component } from '@angular/core';
import { MatTabNav } from '@angular/material/tabs';
import { DataViewRoutingModule } from './data-view-routing.module';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent{
  constructor (
    private router: DataViewRoutingModule,
  ) {}
  links:Link[] = [
    {name:'Overview',target:"/data/overview"} ,
    {name:'Planes',target:"/data/planes"} ,
    {name:'Weapons',target:"/data/weapons"}  ,
    {name:'Units',target:"/data/units"} ,
  ]
  activeLink = this.links[0];
}
export interface Link {
  name:string;
  target:string;
}
