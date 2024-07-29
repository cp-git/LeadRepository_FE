import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetails } from 'src/app/userdetails/class/userdetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userDetailsUrl: string = `http://localhost:8090/userdetails/lead`;
  constructor(
    private http: HttpClient
  ) { }

  findUserIsValid(username: string, password: string): Observable<Userdetails> {
    return this.http.get<Userdetails>(`${this.userDetailsUrl}/finduser/${username}/${password}`)

  }



}
