import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainsectionComponent } from './mainsection.component';

const routes: Routes = [{ path: '', component: MainsectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainsectionRoutingModule { }
