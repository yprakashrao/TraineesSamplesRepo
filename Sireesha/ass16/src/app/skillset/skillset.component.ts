
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent {
  constructor(private router: Router) { }
  data: any;
  
  regForm: FormGroup = new FormGroup({

    courses: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    certification: new FormControl("", Validators.required)

  });


  onSubmit(form: any) {
    console.log(form);
    localStorage.setItem('skillSet', JSON.stringify(this.regForm.value));
    this.router.navigateByUrl('technical');
  }

}

