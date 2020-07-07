import { Component } from '@angular/core';

import { Beer } from '../../models/beer';

@Component({
  selector: 'app-beer-info-flyout',
  templateUrl: './beer-info-flyout.component.html',
  styleUrls: ['./beer-info-flyout.component.scss']
})
export class BeerInfoFlyoutComponent {

  constructor(
    public beer: Beer
  ) {}
}
