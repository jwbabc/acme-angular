import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { NodeComponent } from './node/node.component';

const routes: Routes = [
  { path: 'config', component: ConfigComponent },
  { path: 'node', component: NodeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // enable for debugging
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
