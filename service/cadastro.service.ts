import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private _http: HttpClient) { }

  get(id: number): Observable<Cadastro> {
    return this._http.get<Cadastro>('http://localhost:3000/cadastros/'+id);
  }

  getAll():Observable<Cadastro[]> {
    return this._http.get<Cadastro[]>('http://localhost:3000/cadastros');
  }

  create(author: Cadastro):Observable<Cadastro> {
    return this._http.post<Cadastro>('http://localhost:3000/cadastros', author);
  }

  update(id: number,author: Cadastro):Observable<Cadastro> {
    return this._http.put<Cadastro>('http://localhost:3000/cadastros/'+id, author);
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:3000/cadastros/'+id);
  }
}
