import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { WForecastService } from '../weather-forecast/services/w.forecast.service';
import { AppUtilService } from '../services/app.util.service';

@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeDayDetail: any;

  constructor(private wForecastSvcs: WForecastService, private appUtilSvcs: AppUtilService, private ref: ChangeDetectorRef) { }
  wCity: any;
  private wForecastDayArray: Array<any>;
  wForecastDayGroup: any;
  wUniqForecastDayArray: Array<any>;
  selectedWForecastDay: any;

  ngOnInit(): void {
    this.fetchWeatherDetail();
  }

  locationListner(placeDetail) {
    this.fetchWeatherDetail();
  }

  onSelecteWForecastDay(event, wDay) {
    this.selectedWForecastDay = Object.assign([], this.wForecastDayGroup[wDay.busiDate]);
    this.activeDayDetail = this.selectedWForecastDay[0];
    for (let i = 0; i < this.wUniqForecastDayArray.length; i++) {
      this.wUniqForecastDayArray[i].isActive = this.wUniqForecastDayArray[i].busiDate == wDay.busiDate;
    }
    this.ref.detectChanges();
  }

  fetchWeatherDetail() {

    this.wCity = this.wForecastSvcs.locationName;
    this.wForecastSvcs.getWeatherDataByGeo().subscribe(
      (wDetail: any) => {
        this.wForecastDayArray = [];
        this.activeDayDetail = null;

        this.wForecastDayArray = wDetail.list.map((wDay: any) => {
          wDay.busiDate = wDay.dt_txt.split(" ")[0];
          wDay.isActive = false;
          return wDay;
        })
        this.wForecastDayGroup = this.appUtilSvcs.groupObjectByKey(this.wForecastDayArray, 'busiDate');
        this.wUniqForecastDayArray = this.appUtilSvcs.arrayFromMap(this.appUtilSvcs.mapFromArray(this.wForecastDayArray, 'busiDate', false, 3));

        setTimeout(() => {
          this.selectedWForecastDay = Object.assign([], this.wForecastDayGroup[this.wUniqForecastDayArray[0].busiDate]);
          this.selectedWForecastDay[0].isActive = true;
          this.activeDayDetail = this.selectedWForecastDay[0];
          this.ref.detectChanges();
        })


      }
    )
  }
}
