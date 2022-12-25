import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsectionComponent } from './teamsection.component';

const routes: Routes = [{ path: '', component: TeamsectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsectionRoutingModule { }
