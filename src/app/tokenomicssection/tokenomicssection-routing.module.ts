import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenomicssectionComponent } from './tokenomicssection.component';

const routes: Routes = [{ path: '', component: TokenomicssectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenomicssectionRoutingModule { }
