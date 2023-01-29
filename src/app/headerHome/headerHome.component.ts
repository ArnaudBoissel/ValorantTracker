import { Component, OnInit } from '@angular/core';
import { HeaderHomeService } from '../service/headerHome.service';
import { HeaderHomeCacheService } from '../service/headerHome-cache.service';

@Component({
  selector: 'app-headerHome',
  templateUrl: './headerHome.component.html',
  styleUrls: ['./headerHome.component.css']
})
export class HeaderHomeComponent implements OnInit {
  color: string = "#333";
  
  constructor(private headerHomeService: HeaderHomeService, private headerHomeCacheService: HeaderHomeCacheService) { }

  ngOnInit() {
    this.headerHomeService.background$.subscribe(color_l => {
      this.color = color_l;
      console.log("couleur du header from agent: ", color_l)
      console.log("couleur du header: ", this.color)
    });
    console.log("couleur du header final: ", this.color)
    this.color = this.headerHomeCacheService.color;
    console.log("couleur du cache: ", this.headerHomeCacheService.color)
    console.log("couleur du header avec cache: ", this.color)
  }
  
}
