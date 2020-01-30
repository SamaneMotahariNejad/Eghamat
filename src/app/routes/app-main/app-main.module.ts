
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SecondSectionComponent } from './home/second-section/second-section.component';
import { ThirdSectionComponent } from './home/third-section/third-section.component';
import { FourthSectionComponent } from './home/fourth-section/fourth-section.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TouristResidenceComponent } from './pages/tourist-residence/tourist-residence.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'touristResidence', component: TouristResidenceComponent },
];

@NgModule({
  imports: [
    SharedModule,
    NgbModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    AboutUsComponent,
    TouristResidenceComponent
  ],
  exports: [
    RouterModule,
  ],
  providers: []

})
export class AppMainModule {
}
