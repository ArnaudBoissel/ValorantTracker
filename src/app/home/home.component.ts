import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderHomeService } from '../service/headerHome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private headerHomeService: HeaderHomeService) { }

  ngOnInit() {
    this.headerHomeService.updateBackground("#333");//Change background color
  }

  onCardClick() {
    this.router.navigate(['/agent']);
  }

  isHomeRoute() {
    return this.router.url === '/home';
}
}
