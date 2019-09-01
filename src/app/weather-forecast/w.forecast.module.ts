import { NgModule } from '@angular/core';
import { WForecastCityComponent } from './forecast-city/w.forecast.city.component';
import { WForecastDayDetailComponent } from './forecast-day-detail/w.forecast.day.detail.component';
import { WForecastDayComponent } from './forecast-day/w.forecast.day.component';
import { WForecastService } from './services/w.forecast.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '../../../node_modules/@angular/common';

const WForecastModuleComponents = [
    WForecastDayDetailComponent,
    WForecastDayComponent,
    WForecastCityComponent
];

@NgModule({
    declarations: [
        WForecastModuleComponents
    ],
    imports: [CommonModule,HttpClientModule],
    exports: [WForecastModuleComponents],
    providers: [WForecastService]
})
export class WForecastModule {

}