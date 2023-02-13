import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderHomeService {
    private backgroundSource = new Subject<string>();
    background$ = this.backgroundSource.asObservable();
    private options = new Subject<string[]>();
    options$ = this.options.asObservable();
    private optionsBack = new Subject<string>();
    optionsBack$ = this.optionsBack.asObservable();
    private selectedOption = new BehaviorSubject<string>('');
    
    updateBackground(color: string) {
      this.backgroundSource.next(color);
    }

    updateOptions(options: string[] )
    {
      this.options.next(options);
    }

    setSelectedOption(option: string): void {
      this.optionsBack.next(option);
      console.log("set option: ", option)
      console.log("setSelectedOption: ", this.selectedOption)
    }
  
    getSelectedOption(): BehaviorSubject<string>  {
      console.log("getSelectedOption: ", this.selectedOption)
      return this.selectedOption;
    }
}
