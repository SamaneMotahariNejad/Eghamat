
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home.component';

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
    SlideshowComponent,
    HomeComponent
  ],
  exports: [
    RouterModule,
  ],
  providers: []

})
export class HomeModule {
}
