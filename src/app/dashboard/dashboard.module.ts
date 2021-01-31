import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule} from '../shared/shared.module'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThreeDeeElevationComponent } from './three-dee-elevation/three-dee-elevation.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, PortfolioComponent, TeamComponent, ContactComponent, ThreeDeeElevationComponent, PlanComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
