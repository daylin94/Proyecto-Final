import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 informacionRecibida:any = ""
  constructor(private servicio:ConectorService) {
    servicio.getInformacionGames().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
