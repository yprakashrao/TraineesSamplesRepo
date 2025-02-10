import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualificationdetails',
  templateUrl: './qualificationdetails.component.html',
  styleUrls: ['./qualificationdetails.component.css']
})
export class QualificationdetailsComponent {

  constructor(private router: Router) { }

  data: any;
  
  regForm: FormGroup = new FormGroup({

    ug: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    pg: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z.\s]*$/)]),

  });


  onSubmit(form: any) {
    console.log(form);
    localStorage.setItem('qualifications', JSON.stringify(this.regForm.value));
    this.router.navigateByUrl('job');
  }

}

