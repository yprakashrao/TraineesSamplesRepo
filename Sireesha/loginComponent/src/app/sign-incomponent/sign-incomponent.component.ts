import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-incomponent',
  templateUrl: './sign-incomponent.component.html',
  styleUrls: ['./sign-incomponent.component.css']
})
export class SignIncomponentComponent {


  errormsg: boolean = false;
  successmsg: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  loginForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  });

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

      Authorization: 'Basic ' + btoa('manish_machha:Manish@8080'),

    }),

  };


  onSubmit() {

    let parameters = { username: this.loginForm.value.username, password: this.loginForm.value.password };

    let queryParams = new HttpParams({ fromObject: parameters });


    var httpOptions = {

      headers: new HttpHeaders({

        'Content-Type': 'application/json',

        Authorization: 'Basic ' + btoa(`${this.loginForm.value.username}:${this.loginForm.value.password}`),

        // Authorization: 'Basic ' + btoa(httpOptions), foe un comment this use bottom code comment the top line

      }), params: queryParams

    };
    console.log(this.loginForm.value);

    if (this.loginForm != null || this.loginForm != undefined) {
      this.http.get("http://localhost:8080/users/login", httpOptions)
        .subscribe(
          (res: any) => {
            console.log(res.status);
            if (res === 200) {
              this.errormsg = false
              this.successmsg = true;
              this.router.navigate(['/show-list'])
            }
          }, (error: Response) => {
            if (error.status === 401) {
              this.successmsg = false;
              this.errormsg = true
            }
          });
    }






  }
}

 //   if (this.loginForm != null || this.loginForm != undefined) {
  //       this.http.get("http://192.168.0.123:8080/users/login"+this.loginForm.value.userName+"/"+this.loginForm.value.password)
  //         .subscribe((res: any) => {
  //             console.log(res.status);
  //             if (res === 200) {
  //               this.errormsg = false
  //               this.successmsg = true;
  //               this.router.navigate(['/show-list'])
  //             }
  //             else{
  //               this.errormsg = true;
  //               this.successmsg = false;
  //             }
  //           });
  //     }
  // }




  //for selecting static value of data
  // onSubmit() {
  //   if (this.loginForm.value == null) {
  //     this.errormsg = true;
  //   }
  //   else {
  //     console.log(this.successmsg)
  //     this.successmsg = true;
  //     this.router.navigate(['/show-list']);

  //   }
  // }