
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { SecondSectionComponent } from './second-section/second-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    SecondSectionComponent
  ],
  exports: [
    RouterModule,
  ],
  providers: []

})
export class HomeModule {
}
