import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [GraphComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: GraphComponent
      }
    ])
  ]
})
export class GraphModule { }
