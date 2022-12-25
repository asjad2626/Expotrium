import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootersectionComponent } from './footersection.component';

const routes: Routes = [{ path: '', component: FootersectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootersectionRoutingModule { }
