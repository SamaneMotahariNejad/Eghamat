
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
import { WorkResidenceComponent } from './pages/work-residence/work-residence.component';
import { PermanentResidencyComponent } from './pages/permanent-residency/permanent-residency.component';
import { PassportComponent } from './pages/passport/passport.component';
import { StudentResidenceComponent } from './pages/student-residence/student-residence.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component';
import { MarketResearchComponent } from './pages/market-research/market-research.component';
import { DigitalCurrencyComponent } from './pages/digital-currency/digital-currency.component';
import { BitcoinComponent } from './pages/bitcoin/bitcoin.component';
import { InternationalExhibitionsComponent } from './pages/international-exhibitions/international-exhibitions.component';
import { HotelsProjectComponent } from './pages/hotels-project/hotels-project.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'touristResidence', component: TouristResidenceComponent },
  { path: 'workResidence', component: WorkResidenceComponent },
  { path: 'permanentResidency', component: PermanentResidencyComponent },
  { path: 'passport', component: PassportComponent },
  { path: 'studentResidence', component: StudentResidenceComponent },
  { path: 'bankAccount', component: BankAccountComponent },
  { path: 'companyRegistration', component: CompanyRegistrationComponent },
  { path: 'internationalExhibitions', component: InternationalExhibitionsComponent },
  { path: 'marketResearch', component: MarketResearchComponent },
  { path: 'digitalCurrency', component: DigitalCurrencyComponent },
  { path: 'hotelsProject', component: HotelsProjectComponent },
  { path: 'contactUs', component: ContactUsComponent },
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
    TouristResidenceComponent,
    WorkResidenceComponent,
    PermanentResidencyComponent,
    PassportComponent,
    StudentResidenceComponent,
    BankAccountComponent,
    CompanyRegistrationComponent,
    MarketResearchComponent,
    DigitalCurrencyComponent,
    BitcoinComponent,
    InternationalExhibitionsComponent,
    HotelsProjectComponent,
    ContactUsComponent
  ],
  exports: [
    RouterModule,
  ],
  providers: []

})
export class AppMainModule {
}
