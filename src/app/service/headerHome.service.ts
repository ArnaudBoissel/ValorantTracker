import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderHomeService {
    private backgroundSource = new Subject<string>();
    background$ = this.backgroundSource.asObservable();
    private contentSource = new BehaviorSubject<{content: string, vars: any}>({content: '', vars: {}});
    currentContent = this.contentSource.asObservable();
    
    updateBackground(color: string) {
      this.backgroundSource.next(color);
    }

    updateContent(content: string, vars: any) {
      this.contentSource.next({content, vars});
      console.log("services data: ", vars, content)
    }
}
