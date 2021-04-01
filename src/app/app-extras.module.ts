import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/skyux-lib-stache';

import { AppSkyModule } from './app-sky.module';

import { BeerInfoModalComponent } from './components/beer-info-modal/beer-info-modal.component';
import { BeerInfoFlyoutComponent } from './components/beer-info-flyout/beer-info-flyout.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { TemperatureCardComponent } from './components/temperature-card/temperature-card.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  exports: [
    AppSkyModule,
    DateAgoPipe,
    StacheModule
  ],
  entryComponents: [
    BeerInfoModalComponent,
    BeerInfoFlyoutComponent,
    SensorCardComponent,
    TemperatureCardComponent
  ],
  providers: [
    DateAgoPipe
  ],
  declarations: [
    DateAgoPipe
  ]
})
export class AppExtrasModule { }
