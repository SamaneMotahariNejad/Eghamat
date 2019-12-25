import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
    imports: [
        SharedModule,
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    providers: [
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ]
})
export class LayoutModule { }
