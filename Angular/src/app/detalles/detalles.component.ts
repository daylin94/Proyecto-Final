import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valorDelLink:string=""
  informacionRecibida:any=""

  constructor(private ruta:ActivatedRoute,private servicio:ConectorService) { 
    this.ruta.params.subscribe((data:any)=>{
      this.valorDelLink=data.id
      this.servicio.getInformacionDetallada(this.valorDelLink).subscribe((info:any)=>{
        this.informacionRecibida=info
        console.log(this.informacionRecibida)
      })
    })
  }

  ngOnInit(): void {
  }

}
