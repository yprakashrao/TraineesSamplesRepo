import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor(private fb: FormBuilder, private router: Router) { }

  FeedbackForm: FormGroup = this.fb.group({
    feedback: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s.]*$/)]],
  })

  submitForm() {
    localStorage.setItem('Feedback', JSON.stringify(this.FeedbackForm.value));
    this.router.navigate(["/", "confirmpage"]);
    console.log("saved");
  }

}
