import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  constructor(private http: HttpClient) { }

  data: any;
  errormsg: boolean = false;
  successmsg: boolean = false;

  regForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z0-9]*$/)]),

    fullname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]),

    password: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,9}/)]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),

    gender: new FormControl('', Validators.required)

  });

  // calling data through api and checking the error messages

  onSubmit(form: any) {
    this.http.post("http://localhost:8080/users/save", form.value)
      .subscribe((res: any) => {
        console.log(res.status);

        if (res.status === 201) {
          this.successmsg = true;
          form.reset();
        }

        else {
          this.errormsg = true;
        }

      });
  }


  //for checking error messages statistically
  
  // onSubmit(form: any) {
  //   if (form.value == null) {
  //     this.errormsg = true;
  //   }
  //   else {
  //     this.successmsg = true;
  //     form.reset();
  //   }
  // }

}
