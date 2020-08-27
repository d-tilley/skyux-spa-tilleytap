import { Component } from '@angular/core';

import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-info-modal',
  templateUrl: './beer-info-modal.component.html',
  styleUrls: ['./beer-info-modal.component.scss']
})
export class BeerInfoModalComponent {
  constructor(
    public beer: Beer
  ) {}
}
