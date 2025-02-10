import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {


  regForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),

    fullname: new FormControl('', [Validators.required, Validators.maxLength(15)]),

    // email: new FormControl('', [Validators.email, Validators.required]),

    password: new FormControl('', [Validators.required, Validators.maxLength(8)]),

    // cpassword: new FormControl('', [Validators.required]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),

    gender: new FormControl('', Validators.required)

  });
}
