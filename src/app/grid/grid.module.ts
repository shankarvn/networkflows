import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { SharedLibModule } from '@ns/shared-lib'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    SharedLibModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent
      }
    ])
  ]
})
export class GridModule { }
