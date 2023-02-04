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
  content: string = '';
  vars: any;
  
  constructor(private headerHomeService: HeaderHomeService, private headerHomeCacheService: HeaderHomeCacheService) { }

  ngOnInit() {
    this.headerHomeService.background$.subscribe(color_l => {
      this.color = color_l;
    });
    this.headerHomeService.currentContent.subscribe((data) => {
      this.content = data.content;
      this.vars = data.vars;
      console.log("html injecté depuis service: ", this.content);
      console.log("var injecté depuis service: ", this.vars);
    });
  }
  
}
