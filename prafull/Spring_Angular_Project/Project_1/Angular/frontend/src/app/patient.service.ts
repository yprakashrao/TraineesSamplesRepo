import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) { }


  showExisting(first_name:String, last_name: String, phone: String) {
    const baseUrl = 'http://localhost:8080/existing/'+first_name+'/'+last_name+'/'+phone;
    return this.http.get<any>(baseUrl);
  }

  getPatientList() {
    const baseUrl = 'http://localhost:8080/patients';
    return this.http.get<any>(baseUrl);
  }

  createPatient(patient: any) {
    const baseUrl = 'http://localhost:8080/add_patient';
    return this.http.post<any>(baseUrl, patient);
  }
}
