import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import {
  SkyMediaQueryService,
  SkyMediaBreakpoints
} from '@skyux/core';
import {
  SkyFlyoutInstance,
  SkyFlyoutService,
  SkyFlyoutConfig
} from '@skyux/flyout';

import { BeerInfoFlyoutComponent } from '../../components/beer-info-flyout/beer-info-flyout.component';
import { Sensor } from '../../models/sensor.model';
import { Beer } from '../../models/beer.model';

const BLUE_COLOR = '#00b4f1';
const YELLOW_COLOR = '#ffce00';
const RED_COLOR = '#f04141';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.scss']
})
export class SensorCardComponent implements OnDestroy {
  @Input() public sensor: Sensor;
  @Input() public beer: Beer;
  public flyout: SkyFlyoutInstance<any>;
  public cardSize: string;
  private mediaQuerySubscription: Subscription;

  constructor(
    private flyoutSvc: SkyFlyoutService,
    private mediaQueries: SkyMediaQueryService
  ) {
    this.mediaQuerySubscription = this.mediaQueries.subscribe((breakpoint: SkyMediaBreakpoints) => {
      switch (breakpoint) {
        case SkyMediaBreakpoints.xs:
          this.cardSize = 'small';
          break;
        case SkyMediaBreakpoints.sm:
        case SkyMediaBreakpoints.md:
        case SkyMediaBreakpoints.lg:
          this.cardSize = 'large';
          break;
        default:
          this.cardSize = 'large';
      }
    });
  }

  // The SVG DY attribute indicates a vertical shift from the top down
  // Our SVG icons are fixed at a 100px height
  // We'll want to push our SVG fill down by the remaining unfilled percantage
  public convertSvgFill(percent: number): number {
    if (this.cardSize === 'small') {
      return Math.floor((100 - percent) / 2);
    } else {
      return Math.floor(100 - percent);
    }
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
    const flyoutConfig: SkyFlyoutConfig = {
      providers: [{
        provide: Beer,
        useValue: this.beer
      }],
      minWidth: 420
    };

    this.flyout = this.flyoutSvc.open(BeerInfoFlyoutComponent, flyoutConfig);

    this.flyout.closed.subscribe(() => {
      this.flyout = undefined;
    });
  }

  public ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }
}
