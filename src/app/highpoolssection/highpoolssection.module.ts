import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighpoolssectionRoutingModule } from './highpoolssection-routing.module';
import { HighpoolssectionComponent } from './highpoolssection.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    
  ],
  imports: [
    SharedModule,
    // HighpoolssectionComponent,
    HighpoolssectionRoutingModule,
    MatTableModule
  ],
  exports:[
    // HighpoolssectionComponent
  ]
})
export class HighpoolssectionModule { }
