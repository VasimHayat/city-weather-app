import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    selector:'w-forecast-day',
    templateUrl:'w.forecast.day.component.html',
    styleUrls:['w.forecast.day.component.css']
})
export class WForecastDayComponent{

    @Input() forecastDay:any;
    @Input() isActive:boolean;
    @Output() selectDay = new EventEmitter<Object>();
    
    handleClick(){
        this.selectDay.emit();
    }
}