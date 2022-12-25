import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapsectionComponent } from './roadmapsection.component';

const routes: Routes = [{ path: '', component: RoadmapsectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadmapsectionRoutingModule { }
