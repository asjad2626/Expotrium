import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadersectionRoutingModule } from './headersection-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeadersectionComponent } from './headersection.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HeadersectionRoutingModule,
    HeadersectionComponent
  ],
  exports:[
    HeadersectionComponent
  ]
})
export class HeadersectionModule { }
