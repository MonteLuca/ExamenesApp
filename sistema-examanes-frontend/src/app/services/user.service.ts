import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})

// * Esta es la clase que nos permite conectarnos al backend

export class UserService {

  constructor(private httpClient: HttpClient) { }

  public registrarUsuario(user: Usuario) {
    return this.httpClient.post(`${baseUrl}/usuarios/`, user);
  }

}
