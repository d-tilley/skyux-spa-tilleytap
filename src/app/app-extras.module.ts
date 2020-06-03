import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { BeerInfoFlyoutComponent } from './beer-info-flyout.component';

@NgModule({
  exports: [
    AppSkyModule
  ],
  entryComponents: [
    BeerInfoFlyoutComponent
  ]
})
export class AppExtrasModule { }
