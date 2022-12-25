import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslettersectionComponent } from './newslettersection.component';

const routes: Routes = [{ path: '', component: NewslettersectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewslettersectionRoutingModule { }
