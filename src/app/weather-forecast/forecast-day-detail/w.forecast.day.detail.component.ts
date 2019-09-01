import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'w-forecast-day-detail',
    templateUrl: 'w.forecast.day.detail.component.html',
    styleUrls: ['w.forecast.day.detail.component.css']
})
export class WForecastDayDetailComponent{
  
    @Input() wCity:any;
    @Input() wForecatDayDetailArray:Array<any>;
    @Input() activeDayDetail:any; 

}

