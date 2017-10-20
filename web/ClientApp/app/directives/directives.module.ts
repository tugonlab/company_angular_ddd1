import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inRoleDirective } from './inRoleDirective';
import { replaceDirective } from './replaceDirective';
import { claimDirective } from './claimDirective';
import { scrollTopDirective } from './scrollTopDirective';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './nav-dropdown.directive';
import { ProgressCircleDirective } from './progress-circle.directive';
import { AsideToggleDirective } from './aside.directive';
import { NlbrDirective } from './nlbr.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    inRoleDirective,
    replaceDirective,
    claimDirective,
    scrollTopDirective,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    ProgressCircleDirective,
    AsideToggleDirective,
    NlbrDirective,
  ],
  exports: [
    inRoleDirective,
    replaceDirective,
    claimDirective,
    scrollTopDirective,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    ProgressCircleDirective,
    AsideToggleDirective,
    NlbrDirective
  ],
})
export class DirectivesModule { }
