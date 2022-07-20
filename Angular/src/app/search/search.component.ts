import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConectorService } from '../conector.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valordeLink:string=""
  informacionApiBuscada:any=""
  constructor(private route:ActivatedRoute,
    private servicio: ConectorService) {
    this.route.params.subscribe((data:any)=>{
      this.valordeLink=data.id
      this.servicio.getInfoBusqueda(this.valordeLink).subscribe((info:any)=>{
        this.informacionApiBuscada=info
        console.log(this.informacionApiBuscada)
      })
    })
   }

  ngOnInit(): void {
  }

}
