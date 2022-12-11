import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeaponListComponent {

}
