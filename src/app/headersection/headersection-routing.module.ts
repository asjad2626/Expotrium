import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersectionComponent } from './headersection.component';

const routes: Routes = [{ path: '', component: HeadersectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadersectionRoutingModule { }
