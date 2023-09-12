import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/main/header/header.component';
import { SliderComponent } from './components/home-page/slider/slider.component';
import { AboutComponent } from './components/home-page/about/about.component';
import { PortfolioComponent } from './components/home-page/portfolio/portfolio.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { FooterComponent } from './components/main/footer/footer.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import { TeamComponent } from './components/home-page/team/team.component';
import { PortfolioDetailComponent } from './components/home-page/portfolio/portfolio-detail/portfolio-detail.component';
import { PortfoliosComponent } from './components/home-page/portfolio/portfolios/portfolios.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    TeamComponent,
    PortfolioDetailComponent,
    PortfoliosComponent,
    PortfolioComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    FormsModule,
    ButtonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      disableTimeOut: false,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
