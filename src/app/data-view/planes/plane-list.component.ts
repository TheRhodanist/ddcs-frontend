import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaneListComponent {

}
