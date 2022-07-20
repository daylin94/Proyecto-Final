import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  private textSubject : BehaviorSubject<string>
  public textObservable: Observable<string>

  constructor(private http:HttpClient) {
    this.textSubject = new BehaviorSubject<string>('')
    this.textObservable = this.textSubject
   }

  getInformacionGames(){
    return this.http.get("https://api.rawg.io/api/games?key=73a7407d4e6d457a9e7d357e00ff02d8")
  }

  getInfoBusqueda(valorBusqueda:string){
  return this.http.get(`https://api.rawg.io/api/games?key=73a7407d4e6d457a9e7d357e00ff02d8&search=${valorBusqueda}`)
  }

   getInformacionDetallada(id:String){
    return this.http.get(`https://api.rawg.io/api/games/${id}?key=73a7407d4e6d457a9e7d357e00ff02d8`)

   }
}
