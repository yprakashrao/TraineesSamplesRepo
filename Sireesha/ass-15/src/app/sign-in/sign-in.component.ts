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

      username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z0-9]*$/)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,9}/)])

    });

  }


  onSubmit() {
    console.log(this.loginForm.value);

    if (this.loginForm != null || this.loginForm != undefined) {
      this.http.get("http://192.168.0.227:8080/users/" + this.loginForm.value.username + "/" + this.loginForm.value.password)
        .subscribe(
          (res: any) => {
            console.log(res.status);
            if (res.status === 200) {
              this.successmsg = true;
              console.log(this.successmsg)
            }

            else {
              this.errormsg = true;
            }
          });


    }
  }

}
