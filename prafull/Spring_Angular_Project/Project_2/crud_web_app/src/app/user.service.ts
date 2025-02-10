import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";


@Injectable({
    providedIn:'root'
})

export class UserService{

 constructor(private http:HttpClient){}

  getUserList(){
    const baseUrl = 'http://localhost:8080/user/users';
    return this.http.get<any>(baseUrl);
  }

  loginUser(username:string,password:string){
    const baseUrl = 'http://localhost:8080/user/login/'+username+'/'+password;
    return this.http.get<any>(baseUrl);
  }

  saveUser(user:any){
    const baseUrl = 'http://localhost:8080/user/save';
    return this.http.post<any>(baseUrl,user);
  }

  deleteUser(userId:number){
    const baseUrl = 'http://localhost:8080/user/delete/'+userId;
    return this.http.delete<any>(baseUrl)
  }

  updateUser(userId:any){
    const baseUrl = 'http://localhost:8080/user/update/'+userId;
    return this.http.put<any>(baseUrl,this.updateUser)
  }

  getUserById(id:number){
    const baseUrl = 'http://localhost:8080/user/'+id;
    return this.http.get<User>(baseUrl)
  }
 
}