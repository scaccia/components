/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BaseHarnessFilters} from '@angular/cdk-experimental/testing';

export interface MenuHarnessFilters extends BaseHarnessFilters {
  triggerText?: string | RegExp;
}

export interface MenuItemHarnessFilters extends BaseHarnessFilters {
  text?: string | RegExp;
}
