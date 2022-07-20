import { Component, OnInit, Input } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit  {
  @Input() nombre:string = ''
  @Input() imagen:string = ''
  @Input() idJuego:string=""
  test: string = ''
  constructor(private conectorService: ConectorService,
    private router:Router) {
    
   }

  ngOnInit(): void {
    this.conectorService.textObservable.subscribe(text => {
    this.test= text
    })
  }

  irADetalles(){
    this.router.navigate(["details",this.idJuego])
  }

}
