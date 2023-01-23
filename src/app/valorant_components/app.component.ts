// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../valorant_services/api.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div *ngFor="let data of apiData">
//       {{ data }}
//     </div>
//   `,
//   providers: [ApiService]
// })
// export class AppComponentValorant implements OnInit {
//   apiData: any[];

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     this.apiService.getData().then(response => {
//       this.apiData = response.data;
//     });
//   }
// }
