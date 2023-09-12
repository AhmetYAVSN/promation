import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainComponent } from './components/main/main.component';
import { PortfolioDetailComponent } from './components/home-page/portfolio/portfolio-detail/portfolio-detail.component';
import { PortfoliosComponent } from './components/home-page/portfolio/portfolios/portfolios.component';
import { AboutComponent } from './components/home-page/about/about.component';
import { ContactComponent } from './components/home-page/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
          { path: 'index', component: HomePageComponent },
          // { path: 'kurumsal', component: KurumsalComponent },
          { path: 'about', component: AboutComponent },
          // { path: 'ihracat', component: IhracatComponent },
          { path: 'contact', component: ContactComponent },
          {path: 'portfolio', component: PortfoliosComponent},
          {path: 'portfolio-detail', component: PortfolioDetailComponent},
          { path: '', redirectTo: 'index', pathMatch: 'full' }
        ]
      },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
