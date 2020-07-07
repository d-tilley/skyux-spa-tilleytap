import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { BeerInfoFlyoutComponent } from './components/beer-info-flyout/beer-info-flyout.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';

@NgModule({
  exports: [
    AppSkyModule
  ],
  entryComponents: [
    BeerInfoFlyoutComponent,
    SensorCardComponent
  ]
})
export class AppExtrasModule { }
