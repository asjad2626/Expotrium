import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcosystemsectionModule } from './ecosystemsection.module';

const routes: Routes = [{ path: '', component: EcosystemsectionModule }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcosystemsectionRoutingModule { }
