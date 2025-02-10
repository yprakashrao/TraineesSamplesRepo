import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  
  constructor(private router: Router) { }

  data: any;
  
  regForm: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[A-Za-z.]*$/)]),

    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),

    age: new FormControl("", [Validators.required, Validators.max(120), Validators.min(1), Validators.pattern(/^[0-9]*$/)]),

    gender: new FormControl('', Validators.required),

    mstatus: new FormControl('', Validators.required)


  });


  onSubmit(form: any) {
    console.log(form);
    localStorage.setItem('personalInfo', JSON.stringify(this.regForm.value));
    this.router.navigateByUrl('qualification');
  }



  ngOnInit(): void {
    document .getElementById('age')?.setAttribute('onkeydown', 'return /[0-9]/i.test(event.key)');
  }
}
