import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';
import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyIconModule
} from '@skyux/indicators';
import {
  SkyFluidGridModule,
  SkyCardModule,
  SkyFormatModule,
  SkyPageSummaryModule,
  SkyDefinitionListModule
} from '@skyux/layout';
import { SkyNavbarModule } from '@skyux/navbar';
import { SkyFlyoutModule } from '@skyux/flyout';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyCardModule,
    SkyFormatModule,
    SkyIconModule,
    SkyFlyoutModule,
    SkyPageSummaryModule,
    SkyDefinitionListModule
  ]
})
export class AppSkyModule { }
