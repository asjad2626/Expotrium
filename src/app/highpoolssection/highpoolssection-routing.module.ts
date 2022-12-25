import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighpoolssectionComponent } from './highpoolssection.component';

const routes: Routes = [{ path: '', component: HighpoolssectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighpoolssectionRoutingModule { }
