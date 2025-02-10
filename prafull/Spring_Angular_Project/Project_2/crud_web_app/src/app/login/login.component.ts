import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mystatus: any = 0
  submitted: boolean = false;
  loginstatus: number;
  isLoginError : boolean = false;

  isLoggedin=localStorage.getItem('session')
  
  

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(){
    if(this.isLoggedin){
      window.location.replace('userlist')
    }
    else{
      console.log("ok");
    }
  }

  onSubmit(username:any,password:any) {
    this.user.loginUser(username,password).subscribe
      ((res: any) => {
        this.loginstatus = res.status;
        console.log(this.loginstatus);

        if (this.loginstatus === 200) {
          localStorage.setItem('session','true')
          localStorage.setItem('token','false')
          this.router.navigate(["/", "userlist"]);
        }
        if (this.loginstatus === 404) {
          this.isLoginError = true;
          console.log("login failed");
        }
      }
      );
  }

  get username(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
