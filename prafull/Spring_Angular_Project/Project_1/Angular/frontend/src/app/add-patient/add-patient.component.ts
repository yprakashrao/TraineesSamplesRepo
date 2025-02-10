import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent {
  
  mystatus: any = 0
  submitted = false;
  constructor(private patient: PatientService) { }


  patientsaveform = new FormGroup({

    firstName: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^[a-zA-Z]*$/)]),

    lastName: new FormControl('', [Validators.required, Validators.minLength(2),
    Validators.maxLength(15),  
    Validators.pattern(/^[a-zA-Z]*$/)]),

    age: new FormControl('', [Validators.required,
    Validators.max(100),  
    Validators.min(1)]),

    phone: new FormControl('', [Validators.required,
    Validators.pattern(/^[0-9]*$/),
    Validators.minLength(10),
    Validators.maxLength(10)]),

    gender: new FormControl('', [Validators.required])
  })

  
  registered(patientsaveform: any) {
      this.patient.createPatient(patientsaveform.value).subscribe((res) => {
      this.mystatus = res.status
      console.log(this.mystatus);
      patientsaveform = true;
      this.patientsaveform.markAllAsTouched();
    })
    this.patientsaveform.reset();
  }

  get FirstName(): FormControl {
    return this.patientsaveform.get("firstName") as FormControl;
  }
  get LastName(): FormControl {
    return this.patientsaveform.get("lastName") as FormControl;
  }
  get Age(): FormControl {
    return this.patientsaveform.get("age") as FormControl;
  }
  get Phone(): FormControl {
    return this.patientsaveform.get("phone") as FormControl;
  }
  get Gender(): FormControl {
    return this.patientsaveform.get("gender") as FormControl;
  }
}




