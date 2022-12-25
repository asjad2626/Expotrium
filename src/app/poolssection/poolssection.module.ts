import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolssectionRoutingModule } from './poolssection-routing.module';
import { PoolssectionComponent } from './poolssection.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    PoolssectionRoutingModule,
    PoolssectionComponent
  ],
  exports:[
    PoolssectionComponent
  ]
})
export class PoolssectionModule { }
