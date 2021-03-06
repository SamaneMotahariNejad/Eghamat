import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        SharedModule,
        BsDropdownModule.forRoot(),
        NgbCollapseModule
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
