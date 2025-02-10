import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService,
  private router: Router,private fb:FormBuilder,) { }

  ngOnInit(): void {
    
  }

  RegisterForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z])([a-zA-Z\s]){0,20}$/)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/)]],
    phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
    age: ['', [Validators.required,Validators.max(100),Validators.min(1)]],
    address: ['', [Validators.required, Validators.maxLength(30)]],
    gender: ['', [Validators.required]]
  });

  saveUser(){
    localStorage.setItem('create', JSON.stringify(this.RegisterForm.value));
    // this.userService.createUser(this.user).subscribe( data =>{
    //   console.log(data);
    //   this.goToUserList();
    // },
    // error => console.log(error));
  }
 

  goToUserList(){
    this.router.navigate(['/users']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
