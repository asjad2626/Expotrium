import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeadersectionComponent } from '../headersection/headersection.component';
import { MainsectionComponent } from '../mainsection/mainsection.component';
import { AboutsectionComponent } from '../aboutsection/aboutsection.component';
import { EcosystemsectionComponent } from '../ecosystemsection/ecosystemsection.component';
import { TokenomicssectionComponent } from '../tokenomicssection/tokenomicssection.component';
import { RoadmapsectionComponent } from '../roadmapsection/roadmapsection.component';
import { TeamsectionComponent } from '../teamsection/teamsection.component';
import { NewslettersectionComponent } from '../newslettersection/newslettersection.component';
import { FootersectionComponent } from '../footersection/footersection.component';
import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
import { HeadersectionModule } from '../headersection/headersection.module';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [HomeComponent,CanvasJSChart, MainsectionComponent, AboutsectionComponent, EcosystemsectionComponent, TokenomicssectionComponent, RoadmapsectionComponent, TeamsectionComponent, NewslettersectionComponent, FootersectionComponent],
  imports: [SharedModule, HomeRoutingModule, HeadersectionComponent ],
})
export class HomeModule {}
