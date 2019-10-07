import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'graph'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
