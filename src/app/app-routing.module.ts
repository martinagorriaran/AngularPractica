import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'team', component: TeamComponent},
  {path:'service', component: ServiceComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
