import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  constructor(private http: HttpClient) { }

  // apiCall() {
  //   return this.http.get('http://192.168.0.227:8080/backend/patients');
  // }

  existcall(firstname:string,lastname:string,phone:string) {

  return this.http.get("http://192.168.0.227:8080/backend/patients_fn_ln_ph/"+firstname+"/"+lastname+"/"+phone);

  }

  existcall1(firstname:string,phone:string) {

    return this.http.get("http://192.168.0.227:8080/backend/patients_fn_ph/"+firstname+"/"+phone);

  }

  // existcall2(firstname:string,lastname:string) {

  //   return this.http.get("http://192.168.0.227:8080/backend/patients_fn_ln/"+firstname+"/"+lastname);

  // }
  // existcall3(phone:string,lastname:string) {

  //   return this.http.get("http://192.168.0.227:8080/backend/patients_ln_ph/"+lastname+"/"+phone);

  // }
  // existcall4(firstname:string) {

  //   return this.http.get("http://192.168.0.227:8080/backend/patients_fn/"+firstname);

  // }
  // existcall5(phone:string) {

  //   return this.http.get("http://192.168.0.227:8080/backend/patients_ph/"+phone);

  // }
  // existcall6(lastname:string) {

  //   return this.http.get("http://192.168.0.227:8080/backend/patients_ln/"+lastname);

  // }
  
}
