import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  private textSubject : BehaviorSubject<string>
  public textObservable: Observable<string>

  constructor() {
    this.textSubject = new BehaviorSubject<string>('')
    this.textObservable = this.textSubject
   }

   emitText(chars: string){
    this.textSubject.next(chars)
   }
}
