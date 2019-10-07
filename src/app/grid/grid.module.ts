import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent
      }
    ])
  ]
})
export class GridModule { }
