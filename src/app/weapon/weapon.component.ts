import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderHomeService } from '../service/headerHome.service';


interface Weapon {
  statusWeapon: number;
  name: string;
  category: string;
  displayIcon: string;
  killStreamIcon: string;
  defaultSkinUuid: string;
}

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit  {
  weapons: Weapon[] = [];
  allWeapons: Weapon[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private http: HttpClient, private headerHomeService: HeaderHomeService) { }

  ngOnInit() {
    this.http.get<{status: number, 
      data: {displayName: string, category: string, displayIcon: string, killStreamIcon: string, defaultSkinUuid: string
      }[]}>('https://valorant-api.com/v1/weapons')
      .subscribe(({status, data}) => {
        data.forEach(weapon => {
            this.allWeapons.push({
              statusWeapon: status,
              name: weapon.displayName,
              category: weapon.category,
              displayIcon: weapon.displayIcon,
              killStreamIcon: weapon.killStreamIcon,
              defaultSkinUuid: weapon.defaultSkinUuid
            });
        });
        this.allWeapons.forEach(weapon => {
          weapon.category = this.cleanString(weapon.category)
          if(!this.categories.includes(weapon.category)) {
            this.categories.push(weapon.category);
          }
        });
        this.weapons = this.allWeapons;
      });
      this.categories.push("All");
      
      //this.headerHomeService.updateBackground("pink");//Change background color
      this.headerHomeService.updateOptions(this.categories);

      this.headerHomeService.optionsBack$.subscribe(option => {
        this.selectedCategory = option;
        console.log("option select subs: ", this.selectedCategory)
        this.filterWeapons(this.selectedCategory)
      });
      //this.selectedCategory = this.headerHomeService.getSelectedOption();
      console.log("option select: ", this.selectedCategory)
  }

  cleanString(input: string): string {
    const separatorIndex = input.indexOf("::");
    if (separatorIndex === -1) {
      return input;
    } else {
      return input.slice(separatorIndex + 2);
    }
  }

  filterWeapons(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.weapons = this.allWeapons;
    } else {
      this.weapons = this.allWeapons.filter(weapon => weapon.category === category);
    }
  }
  

}