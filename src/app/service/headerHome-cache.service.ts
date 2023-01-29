import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderHomeCacheService {
  private _color: string = "#333";

  get color() {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
