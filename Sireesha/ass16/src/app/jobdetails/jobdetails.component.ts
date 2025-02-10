import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent {

  constructor(private router: Router) { }

  data: any;
  
  regForm: FormGroup = new FormGroup({

    pcname: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    // aadharno: new FormControl('', [Validators.required, Validators.maxLength(12),Validators.pattern(/^[0-9]*$/)]),

    yoe: new FormControl("", Validators.required)

  });


  onSubmit(form: any) {
    console.log(form);
    localStorage.setItem('Job', JSON.stringify(this.regForm.value));
    this.router.navigateByUrl('skill');
  }

}
