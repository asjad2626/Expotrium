import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakepoolsComponent } from './stakepools.component';

const routes: Routes = [{ path: '', component: StakepoolsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakepoolsRoutingModule { }
