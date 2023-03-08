import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Bundle {
  statusBundle: number;
  name: string;
  displayIcon: string;
}

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {
  bundles: Bundle[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: number, 
      data: {displayName: string, displayIcon: string
      }[]}>('https://valorant-api.com/v1/bundles')
      .subscribe(({status, data}) => {
        data.forEach(bundle => {
            this.bundles.push({
              statusBundle: status,
              name: bundle.displayName,
              displayIcon: bundle.displayIcon
            });
        });
      });
  }
}

