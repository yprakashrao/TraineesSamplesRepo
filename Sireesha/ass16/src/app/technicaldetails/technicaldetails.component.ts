import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-technicaldetails',
  templateUrl: './technicaldetails.component.html',
  styleUrls: ['./technicaldetails.component.css']
})
export class TechnicaldetailsComponent implements OnInit {

  data: any;
  columns = ['name', 'email', 'phonenumber', 'age', 'gender', 'mstatus','ug','pg','pcname','yoe', 'courses', 'certification'];


  personaldetailsexists: boolean = false;
  formValue: any;


  ngOnInit(): void {
    let personalInfo: any = JSON.parse((localStorage.getItem('personalInfo')! as any) || '{}')
    let qualification: any = JSON.parse((localStorage.getItem('qualifications')! as any) || '{}')
    let jobDetails: any = JSON.parse((localStorage.getItem('Job')! as any) || '{}')   
    let skillsSet: any = JSON.parse((localStorage.getItem('skillSet')! as any) || '{}')

    let finalDetails = { ...personalInfo, ...qualification, ...jobDetails, ...skillsSet }
    localStorage.setItem('finalDetails', finalDetails)
    this.data=[finalDetails]
    console.log(finalDetails);
  }
}

