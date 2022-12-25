import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolssectionComponent } from './poolssection.component';

const routes: Routes = [{ path: '', component: PoolssectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolssectionRoutingModule { }
