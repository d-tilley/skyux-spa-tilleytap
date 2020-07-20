import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { SkyWaitService } from '@skyux/indicators';

import { ApiService } from './services/api/api.service';
import { Sensor } from './models/sensor.model';
import { Beer } from './models/beer.model';
import { Brewery } from './models/brewery.model';
import { Keg, KEG_MAPPING } from './models/keg.model';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sensor: Sensor;
  public beer: Beer;

  constructor(
    private apiSvc: ApiService,
    private waitSvc: SkyWaitService
  ) {}

  public ngOnInit() {
    this.waitSvc.beginBlockingPageWait();
    this.apiSvc.getSensor('QTA6MjA6QTY6MTM6NjI6RkE=')
      .pipe(
        mergeMap((sensor: Sensor) => {
          this.sensor = sensor;
          return this.apiSvc.getBeer(sensor.metadata.breweryDbId);
        })
      ).subscribe(result => {
        this.buildBeerObject(JSON.parse(result));
        this.waitSvc.endBlockingPageWait();
      });
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
      currentWeight: this.sensor.metadata.weight,
      fullWeight: this.sensor.metadata.fullWeight,
      kegType: +this.sensor.metadata.kegType,
      kegTypeCapacity: +kegMapping.capacity,
      kegTypeName: kegMapping.name,
      kegTypeLabel: kegMapping.label
    });
  }
}
