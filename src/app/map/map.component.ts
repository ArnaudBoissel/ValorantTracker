import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Map {
  statusMap: number;
  name: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  maps: Map[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: number, 
      data: {displayName: string, coordinates: string, displayIcon: string, listViewIcon: string, splash: string
      }[]}>('https://valorant-api.com/v1/maps')
      .subscribe(({status, data}) => {
        data.forEach(map => {
            this.maps.push({
              statusMap: status,
              name: map.displayName,
              coordinates: map.coordinates,
              displayIcon: map.displayIcon,
              listViewIcon: map.listViewIcon,
              splash: map.splash
            });
        });
      });
  }
}

