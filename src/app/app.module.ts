import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormService } from './core/services/form.service';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      LayoutModule,
      HttpClientModule,
      TabsModule.forRoot(),
      RouterModule.forRoot(routes, { enableTracing: false }),
      BrowserAnimationsModule
   ],
   providers: [
      FormService
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [RouterModule]
})
export class AppModule { }
