import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';



const ELEMENT_DATA: any[] = [
  { name: 'Hsdfk' },
  { name: 'Hefr' },
  { name: 'Lire' },
  { name: 'Beer' },
  { name: 'Bre' },
  { name: 'Ceref' },
  { name: 'Nfef' },
  { name: 'Ofef' },
  { name: 'Freed' },
  { name: 'Neeed' }
];



export interface PeriodicElement1 {}

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {


  data1:any[] = [];

  constructor() { }

  data =ELEMENT_DATA;

  removeItem(gender: any){
    this.data = this.data.filter(item => item.name !== gender.name);
    console.log(this.data);
    console.log(gender);
    this.data1.push(gender);
   // console.log(this.data1);
    
 }

 addnew(secondbox:any){
  this.data1 = this.data1.filter(item => item.name !== secondbox.name);
console.log(this.data1);
console.log(secondbox.name);
  this.data.push(secondbox);
 }
  ngOnInit(): void {}
  
}

