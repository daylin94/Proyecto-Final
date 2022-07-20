import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { ConectorService } from '../conector.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,
    private service:ConectorService) { }


  ngOnInit(): void {
  }
  buscar(searchInput:string){
    this.router.navigate(["search",searchInput])
  }

}
