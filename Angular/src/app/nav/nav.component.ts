import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput')
  inputSearch?: ElementRef
  constructor() { }
  ngAfterViewInit(){
    fromEvent<any>(this.inputSearch?.nativeElement, 'keyup').pipe(
      map(event => event.target.value), 
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(text => console.log(text))
  }

  ngOnInit(): void {
  }

}
