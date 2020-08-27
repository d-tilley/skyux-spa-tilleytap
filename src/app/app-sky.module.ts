import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';
import { SkyMediaQueryModule } from '@skyux/core';
import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyIconModule,
  SkyWaitModule
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
import { SkyModalModule } from '@skyux/modals';
import { SkyDropdownModule } from '@skyux/popovers';

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
    SkyDefinitionListModule,
    SkyWaitModule,
    SkyMediaQueryModule,
    SkyModalModule,
    SkyDropdownModule
  ]
})
export class AppSkyModule { }
