import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-exsisting-patient',
  templateUrl: './exsisting-patient.component.html',
  styleUrls: ['./exsisting-patient.component.css']
})
export class ExsistingPatientComponent implements OnInit{
   
  patients: any[]=[];
  
  myForm:any = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl()
  })
  
  constructor(private patientservice:PatientService) { } 

  ngOnInit() { 
  
  };
  PatientSubmit(){
    this.patients=[]
    this.patientservice.showExisting(this.myForm.value.firstName,this.myForm.value.lastName,this.myForm.value.phone).subscribe((res)=>{
      this.patients.push(res)
      console.log(this.patients);
    })
  }
  }

  


