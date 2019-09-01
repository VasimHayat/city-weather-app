import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { } from 'googlemaps';
import { WForecastService } from '../services/w.forecast.service';


@Component({
    selector: 'w-forecast-city',
    templateUrl: 'w.forecast.city.component.html',
    styleUrls: ['w.forecast.city.component.css']
})
export class WForecastCityComponent implements OnInit {

    autocomplete: any;
    @ViewChild('map', { static: true }) mapElement: any;
    @Output() locationUpdate = new EventEmitter<string>();

    constructor(private wForecastSvcs: WForecastService) { }

    ngOnInit(): void {
        this.initMap();
    }

    initMap() {
        this.autocomplete = new google.maps.places.Autocomplete(this.mapElement.nativeElement);
        this.autocomplete.setFields(
            ['geometry', 'formatted_address']);

        this.autocomplete.addListener('place_changed', ()=>{
            this.placeChangedListner();
        }); 
    }

    placeChangedListner() {  
        let place = this.autocomplete.getPlace();
        this.wForecastSvcs.setLocationDetail(place.geometry.location.lat(), place.geometry.location.lng(), place.formatted_address);
        this.locationUpdate.emit(place)
    }


}
