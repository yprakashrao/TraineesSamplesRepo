import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private http: HttpClient) { }

  data: any;
  errormsg: boolean = false;
  successmsg: boolean = false;

  regForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z0-9]*$/)]),

    fullname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]),

    password: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,9}/)]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),

    gender: new FormControl('', Validators.required)

  });


  onSubmit(form: any) {
    this.http.post("http://192.168.0.227:8080/users", form.value)
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

}
