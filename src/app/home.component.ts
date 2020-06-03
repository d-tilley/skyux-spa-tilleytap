import { Component } from '@angular/core';

import {
  SkyFlyoutInstance,
  SkyFlyoutService
} from '@skyux/flyout';

import { BeerInfoFlyoutComponent } from './beer-info-flyout.component';

const BLUE_COLOR = '#00b4f1';
const YELLOW_COLOR = '#ffce00';
const RED_COLOR = '#f04141';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public flyout: SkyFlyoutInstance<any>;

  constructor(
    private flyoutService: SkyFlyoutService
  ) {}

  // The SVG DY attribute indicates a vertical shift from the top down
  // Our SVG icons are fixed at a 100px height
  // We'll want to push our SVG fill down by the remaining unfilled percantage
  public convertSvgFill(percent: number): number {
    return Math.floor(100 - percent);
  }

  // Get the SVG fill color based on percent full
  public getSvgFillColor(percent: number): string {
    if (percent >= 60) {
      return BLUE_COLOR;
    } else if (percent >= 30) {
      return YELLOW_COLOR;
    } else {
      return RED_COLOR;
    }
  }

  public getSvgLocation() {
    return window.location.href + 'assets/beer-keg.svg';
  }

  public openBeerInfoFlyout(): void {
    this.flyout = this.flyoutService.open(BeerInfoFlyoutComponent);

    this.flyout.closed.subscribe(() => {
      this.flyout = undefined;
    });
  }
}
