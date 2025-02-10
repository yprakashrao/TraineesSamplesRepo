import { Component, OnInit,AfterViewInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})
export class CreatedialogComponent {


  constructor(private matdialog:MatDialog){}


  innerDialoge(): void {
    this.matdialog.open(EditdialogComponent, {
      width: '450px',
      height:'250px',
      disableClose:true
      
    });
  }
  ngOnInit(): void {
  }

}
