import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { BeerInfoModalComponent } from './components/beer-info-modal/beer-info-modal.component';
import { BeerInfoFlyoutComponent } from './components/beer-info-flyout/beer-info-flyout.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  exports: [
    AppSkyModule,
    DateAgoPipe
  ],
  entryComponents: [
    BeerInfoModalComponent,
    BeerInfoFlyoutComponent,
    SensorCardComponent
  ],
  providers: [
    DateAgoPipe
  ],
  declarations: [
    DateAgoPipe
  ]
})
export class AppExtrasModule { }
