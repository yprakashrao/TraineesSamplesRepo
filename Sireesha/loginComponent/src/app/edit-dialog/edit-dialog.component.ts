import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  elementToEdit: any;


  constructor(private http: HttpClient) { }

  ID = localStorage.getItem('elementToEdit')
  data: any;
  errormsg: boolean = false;
  successmsg: boolean = false;

  regForm: FormGroup = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z0-9]*$/)]),

    fullname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z.\s]*$/)]),

    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]),

    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),

    gender: new FormControl('', Validators.required),

    role: new FormControl('',Validators.required),

    id: new FormControl('',Validators.required)

  });

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

      Authorization: 'Basic ' + btoa('siri123:Password@2'),

    }),

  };

  ngOnInit(): void {

    this.http.get("http://localhost:8080/users/" + this.ID, this.httpOptions).subscribe((res: any) => {

      console.log(res.status);

      this.regForm = new FormGroup({

        username: new FormControl(res.data.username),

        fullname: new FormControl(res.data.fullname),

        email: new FormControl(res.data.email),

        phonenumber: new FormControl(res.data.phonenumber),

        gender: new FormControl(res.data.gender),

        role:new FormControl(res.data.role),

        id:new FormControl(localStorage.getItem('elementToEdit'))

      });

      if (res.status === 201) {
        this.successmsg = true;

      }

      else {
        this.errormsg = true;
      }

    });
  }

  updateForm() {

    this.http.put(`http://localhost:8080/users/update/${this.ID}`, this.regForm.value, this.httpOptions)
      .subscribe((res: any) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log("updated");
          window.location.reload();
          this.successmsg = true;
          console.log(this.successmsg)

        }

        else {
          this.errormsg = true;
        }

      })
  }
}

