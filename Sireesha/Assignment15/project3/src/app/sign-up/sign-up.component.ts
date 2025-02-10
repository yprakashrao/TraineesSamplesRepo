import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private http: HttpClient) {  }

  data: any;
  errormsg: boolean = false;
  successmsg: boolean = false;

  regForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),

    fullname: new FormControl('', [Validators.required, Validators.maxLength(15)]),

    // email: new FormControl('', [Validators.email, Validators.required]),

    password: new FormControl('', [Validators.required, Validators.maxLength(8)]),

    // cpassword: new FormControl('', [Validators.required]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),

    gender: new FormControl('', Validators.required)

  });

  //, this.passwordMatch passwordMatch(regForm: any) {
  //   let password = regForm.controls['password'].value;
  //   // let cpassword = regForm.controls['cpassword'].value;

  //   if (password === cpassword) {
  //     return null
  //   }
  //   else {
  //     return {
  //       'passwordMatch': true
  //     }
  //   }

  // }

  onSubmit(form: any) {
    this.http.post("http://192.168.0.227:8080/users",form.value)
      .subscribe((res: any) => {
        console.log(res.status);

        if (res.status === 201) {
          this.successmsg = true;
          form.reset();
        }
        else if (res.status === 404) {
          this.errormsg = true;
        }
      });
  }

}


