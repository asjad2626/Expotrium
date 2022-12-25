import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsectionComponent } from './aboutsection.component';

const routes: Routes = [{ path: '', component: AboutsectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutsectionRoutingModule { }
