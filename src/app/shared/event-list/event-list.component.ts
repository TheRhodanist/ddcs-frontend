import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
//import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { concatMap, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { categoryFilter, columnFormat } from '../shared.module';
import { CampaignEvent } from '../Interfaces';
import { CampaignManagmentService } from '../campaign-managment.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent<T> implements OnInit{
  
  addOnBlur = true;

  @Input() columns: columnFormat[] = [
    {columnDef:'weapon',header:'Weapon',cell: (element: CampaignEvent) => {
    if(element.weapon?.displayName !=undefined) return element.weapon.displayName;
    return element.weapon_name; //check if the "nice" weapon name is available, if not use default
    }},
    {columnDef:'score',header:'Score',cell: (element: CampaignEvent) => element.score},
    {columnDef:'killer',header:'Killer',cell: (element: CampaignEvent) => element.killer},
    {columnDef:'killerType',header:'Type',cell: (element: CampaignEvent) => element.killerType},
    {columnDef:'killerControl',header:'Controlled',cell: (element: CampaignEvent) => element.killerControlledBy},
    {columnDef:'victim',header:'Victim',cell: (element: CampaignEvent) => element.victim},
    {columnDef:'victimType',header:'Type',cell: (element: CampaignEvent) => element.victimType},
    {columnDef:'victimControl',header:'Controlled',cell: (element: CampaignEvent) => element.victimControlledBy},
    {columnDef:'eventTime',header:'Time UTC',cell: (element: CampaignEvent) => this.getDatefromEpoch(element.eventTime)},

  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  weaponFilter = "";
  killerFilter = "";
  killerTypeFilter = "";
  killerControlFilter = "";
  victimFilter = "";
  victimTypeFilter = "";
  victimControlFilter = "";


  @Input() data: any[] = [];
  
  @Input() filt: Object = {};
  activeFilters: categoryFilter<T>[] = [];
  filteredData: any[] = [];
  dataSource = new MatTableDataSource<CampaignEvent>(this.data);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    /**
     * 
     */
    constructor(
      private campaignManager:CampaignManagmentService,
    ) { }
    ngOnInit(): void {
    
      this.update();
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      //this.updateChips(["All"]);
    }
    ngOnChanges(changes: SimpleChanges) {
      this.update();
      //this.displayedColumns = this.columns.map(c => c.columnDef);
      
    }
    /**
     * A function that updates the currently displayed data according to the active filters
     */
    update():void {
      this.dataSource.data = this.data;
      if(this.weaponFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.weapon?.weapon_name.toLowerCase().includes(this.weaponFilter.toLowerCase()))}
      if(this.killerFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.killer?.toLowerCase().includes(this.killerFilter.toLowerCase()))}
      if(this.killerTypeFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.killerType?.toLowerCase().includes(this.killerTypeFilter.toLowerCase()))}
      if(this.killerControlFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.killerControlledBy?.toLowerCase().includes(this.killerControlFilter.toLowerCase()))}
      if(this.victimFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.victim?.toLowerCase().includes(this.victimFilter.toLowerCase()))}
      if(this.victimTypeFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.victimType?.toLowerCase().includes(this.victimTypeFilter.toLowerCase()))}
      if(this.victimControlFilter!="") {this.dataSource.data=this.dataSource.data.filter(el => el.victimControlledBy?.toLowerCase().includes(this.victimControlFilter.toLowerCase()))}
      for (const filter of this.activeFilters) {
        //console.log(filter);
        
        // console.log(this.dataSource.data);
        
        this.dataSource.data = this.dataSource.data.concat(this.data.filter(filter.filterFunction));
        // console.log(this.dataSource.data);
      }
    }
  /**
     * Takes the input from an event-driven html-element and uses it as filter for the datasource
     * @param event 
     */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.update();
  }
  clearFilters():void {
    this.weaponFilter = "";
    this.killerFilter = "";
    this.killerTypeFilter = "";
    this.killerControlFilter = "";
    this.victimFilter = "";
    this.victimTypeFilter = "";
    this.victimControlFilter = "";
    this.dataSource.filter = "";
  }

  getDatefromEpoch(epoch:string):string {
    let date = new Date(Number(epoch));
    return date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }

  resolveEnum(name:string):string {
    return "";
  }

}
enum Filters {
  weapon,
  killer,
  killerType,
  killerControl,
  victim,
  victimType,
  victimControl
}
