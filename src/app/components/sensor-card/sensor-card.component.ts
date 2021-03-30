import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import {
  SkyMediaQueryService,
  SkyMediaBreakpoints
} from '@skyux/core';
import {
  SkyFlyoutInstance,
  SkyFlyoutService,
  SkyFlyoutConfig
} from '@skyux/flyout';
import {
  SkyModalService,
  SkyModalInstance,
  SkyModalConfigurationInterface
} from '@skyux/modals';

import { ApiService } from '../../services/api/api.service';
import { BeerInfoFlyoutComponent } from '../../components/beer-info-flyout/beer-info-flyout.component';
import { WeightSensor } from '../../models/weight-sensor.model';
import { Beer } from '../../models/beer.model';
import { BeerInfoModalComponent } from '../beer-info-modal/beer-info-modal.component';
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
export class SensorCardComponent implements OnInit, OnDestroy {
  @Input() public sensorId: string;
  public weightSensor: WeightSensor;
  public beer: Beer;
  public modal: SkyModalInstance;
  public flyout: SkyFlyoutInstance<any>;
  public screenSize: SkyMediaBreakpoints;
  private mediaQuerySubscription: Subscription;

  constructor(
    private apiSvc: ApiService,
    private modalSvc: SkyModalService,
    private flyoutSvc: SkyFlyoutService,
    private mediaQueries: SkyMediaQueryService
  ) {
    this.mediaQuerySubscription = this.mediaQueries.subscribe((breakpoint: SkyMediaBreakpoints) => {
      this.screenSize = breakpoint;
    });
  }

  public ngOnInit() {
    this.apiSvc.getSensor(this.sensorId)
      .pipe(
        mergeMap((result) => {
          this.weightSensor = WeightSensor.getWeightSensorFromDbObject(result);
          return this.apiSvc.getBeer(this.weightSensor.breweryDbId);
        })
      )
      .subscribe({
        next: (result) => {
          console.log('beer result: ' + JSON.stringify(result));
          this.initializeBeerObject(JSON.parse(result));
        },
        error: () => { console.log('error'); }
      });
  }

  // Convert the keg sensor readings and BreweryDb api response to our client Beer object
  public initializeBeerObject(obj: any) {
    let beer = new Beer({
      id: obj.data.id,
      name: obj.data.name,
      description: obj.data.description,
      abv: obj.data.abv,
      ibu: obj.data.ibu,
      style: obj.data.style.shortName
    });

    if (obj.data.breweries) {
      beer.brewery = new Brewery({
        id: obj.data.breweries[0].id,
        name: obj.data.breweries[0].name,
        imageSmallUrl: obj.data.breweries[0].images.icon,
        imageMediumUrl: obj.data.breweries[0].images.squareMedium
      });
    } else {
      beer.brewery = new Brewery();
    }

    let kegMapping = KEG_MAPPING.map.get(this.weightSensor.kegType);
    beer.keg = new Keg({
      currentWeight: this.weightSensor.weight,
      fullWeight: this.weightSensor.fullWeight,
      kegType: this.weightSensor.kegType,
      kegTypeCapacity: +kegMapping.capacity,
      kegTypeName: kegMapping.name,
      kegTypeLabel: kegMapping.label
    });

    this.beer = beer;
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

  public openBeerInfo(): void {
    switch (this.screenSize) {
      case SkyMediaBreakpoints.xs:
        this.openBeerInfoFlyout();
        break;
      case SkyMediaBreakpoints.sm:
      case SkyMediaBreakpoints.md:
      case SkyMediaBreakpoints.lg:
        this.openBeerInfoModal();
        break;
      default:
        this.openBeerInfoModal();
    }
  }

  // open a modal view for larger view screens
  public openBeerInfoModal(): void {
    let modalConfig: SkyModalConfigurationInterface = {
      providers: [{
        provide: Beer,
        useValue: this.beer
      }],
      size: 'large'
    };

    this.modal = this.modalSvc.open(BeerInfoModalComponent, modalConfig);

    this.modal.closed.subscribe(() => {
      this.modal = undefined;
    });
  }

  // open a flyout for smaller view screens
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

  public getUniqueSvgId(): string {
    return 'keg-fill-' + this.weightSensor.id;
  }

  public getUniqueSvgImageFilter(): string {
    return 'url(#' + this.getUniqueSvgId() + ')';
  }

  public ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }
}
