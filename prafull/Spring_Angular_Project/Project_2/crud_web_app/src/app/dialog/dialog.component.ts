import { Component, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
@Injectable({
  providedIn:'root'
})
export class DialogComponent {

  // id:number;
  // user:User = new User();
  


  constructor(private route: ActivatedRoute,private dialog:MatDialog,
    private userservice:UserService,private router:Router,
    private fb:FormBuilder){
  }
  
  loginForm:FormGroup = this.fb.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    phonenumber: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password1: ['', [Validators.required, Validators.minLength(8)]]
  })
  Login(){
    this.updateUser();
  }
  updateUser(){
    
  }
  // ngOinit(){
  //   this.getUserById();
  // }
  // private getUserById() {
  //   this.id = this.route.snapshot.params['id'];
  //   this.userservice.getUserById(this.id).subscribe({
  //     next: (data) => {
  //       this.user = data;
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  // }
  // form(){

  // }
  // updateUser() {
  //   this.userservice.updateUser(this.id).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.redirectToUserList();
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  // }
  // redirectToUserList() {
  //   this.router.navigate(["/", "userlist"]);
  // }
   
  // onSubmit() {
  //   console.log(this.user);
  //   this.updateUser(); 
  // }

 
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      height:'75%',
      width:'30%'
    });
  }
}
