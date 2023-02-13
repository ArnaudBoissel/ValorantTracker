import { Component, OnInit, Input } from '@angular/core';
import { HeaderHomeService } from '../service/headerHome.service';
import { HeaderHomeCacheService } from '../service/headerHome-cache.service';

@Component({
  selector: 'app-headerHome',
  templateUrl: './headerHome.component.html',
  styleUrls: ['./headerHome.component.css']
})
export class HeaderHomeComponent implements OnInit {
  color: string = "#333";
  options: string[] = [];//mat-select
  selectedOption: string = this.options[0];
  
  constructor(private headerHomeService: HeaderHomeService, private headerHomeCacheService: HeaderHomeCacheService) { }

  ngOnInit() {
    this.headerHomeService.background$.subscribe(color_l => {
      this.color = color_l; 
    });
    this.headerHomeService.options$.subscribe(options_l => {
      this.options = options_l;
      console.log("options ecrite: ", this.options)
    });
  }
  onSelect(selectedValue: string): void {
    this.headerHomeService.setSelectedOption(selectedValue);
  }
}
