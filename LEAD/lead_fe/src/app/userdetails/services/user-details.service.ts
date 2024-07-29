import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdetails } from '../class/userdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userDetailsUrl: string = `http://localhost:8090/userdetails/lead`;
  constructor(
    private http: HttpClient
  ) { }

  findUserIsValid(username: string, password: string): Observable<Userdetails> {
    return this.http.get<Userdetails>(`${this.userDetailsUrl}/finduser/${username}/${password}`)

  }

  getUserDetailsById(id: number): Observable<Userdetails> {
    return this.http.get<Userdetails>(`${this.userDetailsUrl}/userDetails/userId/${id}`)

  }
}
