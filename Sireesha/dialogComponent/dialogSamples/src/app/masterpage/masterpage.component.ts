import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreatedialogComponent } from '../createdialog/createdialog.component';


export interface PeriodicElement {
  name: string;
  phonenumber: number;
  age: number;
  gender: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { age: 1, name: 'Hydrogen', phonenumber: 1.0079, gender: 'H' },
  { age: 2, name: 'Helium', phonenumber: 4.0026, gender: 'He' },
  { age: 3, name: 'Lithium', phonenumber: 6.941, gender: 'Li' },
  { age: 4, name: 'Beryllium', phonenumber: 9.0122, gender: 'Be' },
  { age: 5, name: 'Boron', phonenumber: 10.811, gender: 'B' },
  { age: 6, name: 'Carbon', phonenumber: 12.0107, gender: 'C' },
  { age: 7, name: 'Nitrogen', phonenumber: 14.0067, gender: 'N' },
  { age: 8, name: 'Oxygen', phonenumber: 15.9994, gender: 'O' },
  { age: 9, name: 'Fluorine', phonenumber: 18.9984, gender: 'F' },
  { age: 10, name: 'Neon', phonenumber: 20.1797, gender: 'Ne' },
];

@Component({

  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements AfterViewInit {

  columns = ['name', 'phonenumber', 'age', 'gender'];
  data = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  }

  constructor(private matdialog:MatDialog){}


  openDialog(): void {
    this.matdialog.open(CreatedialogComponent, {
      width: '650px',
      height:'450px',
      disableClose: true
      
    });
  }

  ngOnInit(): void { }

}
