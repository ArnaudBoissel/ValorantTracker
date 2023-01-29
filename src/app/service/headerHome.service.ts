import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderHomeService {
    private backgroundSource = new Subject<string>();
    background$ = this.backgroundSource.asObservable();
    
    updateBackground(color: string) {
    this.backgroundSource.next(color);
    console.log("back color UwU: ", color);
    }
}
