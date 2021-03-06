import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatPopoverEditModule} from '@angular/material-experimental/popover-edit';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {
  PopoverEditCellSpanMatTableExample
} from './popover-edit-cell-span-mat-table/popover-edit-cell-span-mat-table-example';
import {
  PopoverEditMatTableFlexExample
} from './popover-edit-mat-table-flex/popover-edit-mat-table-flex-example';
import {PopoverEditMatTableExample} from './popover-edit-mat-table/popover-edit-mat-table-example';
import {
  PopoverEditTabOutMatTableExample
} from './popover-edit-tab-out-mat-table/popover-edit-tab-out-mat-table-example';

const EXAMPLES = [
  PopoverEditCellSpanMatTableExample,
  PopoverEditMatTableExample,
  PopoverEditMatTableFlexExample,
  PopoverEditTabOutMatTableExample,
];

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPopoverEditModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class PopoverEditExamplesModule {
}
