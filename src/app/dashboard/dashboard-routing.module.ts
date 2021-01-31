import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../shared/layout-component/main/main.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ThreeDeeElevationComponent } from './three-dee-elevation/three-dee-elevation.component';
import { PlanComponent } from './plan/plan.component';
import { InteriorComponent } from './interior/interior.component';
import { PlumberComponent } from './plumber/plumber.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '',component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'team', component: TeamComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'elevation', component: ThreeDeeElevationComponent },
      { path: 'plan', component: PlanComponent },  
      { path: 'interior', component: InteriorComponent },
      { path: 'plumber', component: PlumberComponent }, 
      { path: 'electrician', component: ElectricianComponent },
      { path: 'construction', component: ConstructionComponent },            
            
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
