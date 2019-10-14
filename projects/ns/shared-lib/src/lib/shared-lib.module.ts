import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SharedLibComponent,
    DatagridComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    SharedLibComponent,
    DatagridComponent
  ]
})
export class SharedLibModule { }
