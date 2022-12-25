import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakepoolsRoutingModule } from './stakepools-routing.module';
import { StakepoolsComponent } from './stakepools.component';
import { HeadersectionComponent } from '../headersection/headersection.component';
import { HeadersectionModule } from '../headersection/headersection.module';
import { PoolssectionComponent } from '../poolssection/poolssection.component';
import { HighpoolssectionComponent } from '../highpoolssection/highpoolssection.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    StakepoolsComponent,
    HighpoolssectionComponent
  ],
  imports: [
    CommonModule,
    StakepoolsRoutingModule,
    HeadersectionComponent,
    PoolssectionComponent,
    
    MatTableModule
  ]
})
export class StakepoolsModule { }
