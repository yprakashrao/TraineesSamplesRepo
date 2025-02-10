import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


// export interface PeriodicElement {
//   id: number;
//   username: string;
//   fullname: string;
//   phonenumber: number;
// }

// const ELEMENT_DATA = [
//   { id: 1, username: 'Hydrogen', phonenumber: 1.0079, fullname: 'H' },
//   { id: 2, username: 'Helium', phonenumber: 4.0026, fullname: 'He' },
//   { id: 3, username: 'Lithium', phonenumber: 6.941, fullname: 'Li' },
//   { id: 4, username: 'Beryllium', phonenumber: 9.0122, fullname: 'Be' },
//   { id: 5, username: 'Boron', phonenumber: 10.811, fullname: 'B' },
//   { id: 6, username: 'Carbon', phonenumber: 12.0107, fullname: 'C' },
//   { id: 7, username: 'Nitrogen', phonenumber: 14.0067, fullname: 'N' },
//   { id: 8, username: 'Oxygen', phonenumber: 15.9994, fullname: 'O' },
//   { id: 9, username: 'Fluorine', phonenumber: 18.9984, fullname: 'F' },
//   { id: 10, username: 'Neon', phonenumber: 20.1797, fullname: 'Ne' },
// ];

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

export class ShowListComponent {
  any: any;
  dialog: any;


  constructor(private matdialog: MatDialog, private http: HttpClient) { }

  displayedColumns = ['id', 'username', 'phonenumber', 'fullname', 'Delete', 'Edit'];
  dataSource: MatTableDataSource<any>;

  //p-c data connection
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //assigning sort,paginator for datasource
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.MatPaginator;
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit() {
    this.getUsers()
  }

  //filtering data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  openDialog(id: any): void {
    localStorage.setItem("elementToDelete", id)
    let dialogRef = this.matdialog.open(DeleteDialogComponent, {
      width: '450px',
      height: '250px',
      disableClose: true
    });

  }

  editDialog(id: any): void {
    localStorage.setItem("elementToEdit", id)
    this.matdialog.open(EditDialogComponent, {
      width: '650px',
      height: '450px',
      disableClose: true
    });

  }


  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

      Authorization: 'Basic ' + btoa('siri123:Password@2'),

    }),

  };

  getUsers() {
    this.http.get('http://localhost:8080/users', this.httpOptions).subscribe((res: any) => {
      console.log(res);

      this.dataSource = new MatTableDataSource<any>(res.data)
      this.dataSource.paginator = this.MatPaginator;
      this.dataSource.sort = this.sort;
    })
  }
}
