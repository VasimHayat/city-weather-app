import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { WForecastModule } from './weather-forecast/w.forecast.module';
import { AppUtilService } from './services/app.util.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    CustomMaterialModule,
    WForecastModule
  ],
  providers: [AppUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
