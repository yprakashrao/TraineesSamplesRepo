import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ConfirmpageComponent {

  personalInfo: any
  qualification:any

  ngOnInit(): void {
    let value = JSON.parse((localStorage.getItem('PersonalInfo')! as any) || '{}');
    this.personalInfo = value
    console.log(this.personalInfo);
    let value2 = JSON.parse((localStorage.getItem('Qualification')! as any) || '{}');
    this.qualification = value2
    console.log(this.qualification);
    
  }
}
