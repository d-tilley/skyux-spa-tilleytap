import { Component, OnInit, Input } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import {
  SkyFlyoutInstance,
  SkyFlyoutService,
  SkyFlyoutConfig
} from '@skyux/flyout';

import { ApiService } from '../../services/api/api.service';
import { BeerInfoFlyoutComponent } from '../../components/beer-info-flyout/beer-info-flyout.component';
import { Sensor } from '../../models/sensor.model';
import { Beer } from '../../models/beer.model';
import { Brewery } from '../../models/brewery.model';
import { Keg, KEG_MAPPING } from '../../models/keg.model';

const BLUE_COLOR = '#00b4f1';
const YELLOW_COLOR = '#ffce00';
const RED_COLOR = '#f04141';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.scss']
})
export class SensorCardComponent implements OnInit {
  @Input() public sensorId: string;
  public flyout: SkyFlyoutInstance<any>;
  public sensor: Sensor;
  public beer: Beer;

  constructor(
    private flyoutSvc: SkyFlyoutService,
    private apiSvc: ApiService
  ) {}

  public ngOnInit() {
    this.apiSvc.getSensor(this.sensorId)
      .pipe(
        mergeMap((sensor: Sensor) => {
          this.sensor = sensor;
          return this.apiSvc.getBeer(sensor.metadata.breweryDbId);
        })
      ).subscribe(result => this.buildBeerObject(JSON.parse(result)));
  }

  // Convert the keg sensor readings and BreweryDb api response to our client Beer object
  public buildBeerObject(obj: any) {
    this.beer = new Beer({
      id: obj.data.id,
      name: obj.data.name,
      description: obj.data.description,
      abv: obj.data.abv,
      ibu: obj.data.ibu,
      style: obj.data.style.shortName
    });

    if (obj.data.breweries) {
      this.beer.brewery = new Brewery({
        id: obj.data.breweries[0].id,
        name: obj.data.breweries[0].name,
        imageSmallUrl: obj.data.breweries[0].images.icon,
        imageMediumUrl: obj.data.breweries[0].images.squareMedium
      });
    } else {
      this.beer.brewery = new Brewery();
    }

    let kegMapping = KEG_MAPPING.map.get(+this.sensor.metadata.kegType);
    this.beer.keg = new Keg({
      currentWeight: this.sensor.data,
      fullWeight: this.sensor.metadata.fullWeight,
      kegType: +this.sensor.metadata.kegType,
      kegTypeCapacity: +kegMapping.capacity,
      kegTypeName: kegMapping.name,
      kegTypeLabel: kegMapping.label
    });
  }

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
}
