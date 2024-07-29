import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeadDetails } from '../class/lead-details';

@Injectable({
  providedIn: 'root'
})
export class LeadDetailsService {


  private leadDetailsUrl: string = `http://localhost:8090/leaddetails/lead/leaddetails`;
  constructor(
    private http: HttpClient
  ) { }


  uploadExcelFile(userId: number, formData: FormData): Observable<any> {
    // Send a POST request to the API endpoint for creating a new employee
    console.log(formData);
    return this.http.post<any>(`${this.leadDetailsUrl}/upload/${userId}`, formData);
  }

  createLeadDetails(leadDetails: LeadDetails): Observable<LeadDetails> {
    return this.http.post<LeadDetails>(`${this.leadDetailsUrl}`, leadDetails)
  }
  getLeadDetailsByUserId(userId: number): Observable<LeadDetails[]> {
    return this.http.get<LeadDetails[]>(`${this.leadDetailsUrl}/${userId}`)

  }

  deleteLeadDetailsById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.leadDetailsUrl}/delete/${id}`);
  }


  updateLeadById(id: number, leadDetails: LeadDetails): Observable<LeadDetails> {
    return this.http.put<LeadDetails>(`${this.leadDetailsUrl}/update/${id}`, leadDetails);
  }
}
