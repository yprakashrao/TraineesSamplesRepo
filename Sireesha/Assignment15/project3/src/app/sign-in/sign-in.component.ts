import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  errormsg: boolean = false;
  successmsg: boolean = false;
  loginForm: FormGroup;
  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      PASS: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    console.log(this.loginForm.value);
    
    alert("suneel" + this.loginForm.value.userName +"  "+this.loginForm.value.PASS)
    if(this.loginForm!=null || this.loginForm!=undefined) {
      alert("inside");
      this.http.get("http://192.168.0.227:8080/users/"+this.loginForm.value.userName+"/"+this.loginForm.value.PASS)
  .subscribe(
  (res: any) => {
    console.log(res.status);
    if (res.status === 200) {
      this.successmsg = true;
      console.log(this.successmsg )
    }

    else if (res.status === 404) {
      this.errormsg = true;
    }
  });
     

    }
  }
 
}

