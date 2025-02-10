import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UserService } from '../user.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  user: User[] = [];
  isLoggedin=localStorage.getItem('session')

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'fullname', 'username', 'phonenumber', 'gender', 'update', 'delete'];
  dataSource: MatTableDataSource<User>;

  constructor(private router: Router, private _liveAnnouncer: LiveAnnouncer, private userservice: UserService, private dialog: DialogComponent, private dialog1: DeleteDialogComponent, private dialog2: MatDialog) { }



  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }
  dialogOpen() {
    this.dialog.openDialog();
  }

  signout() {
    localStorage.clear()
    this.router.navigate(['/']);
  }


  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    this.getUserlist();

    if(this.isLoggedin){
      console.log("ok");
    }
    else{
      window.location.replace('')
    }
  };

  deleteData(userId: any) {
    this.dialog1.deleteopenDialog('300ms', '300ms');
    localStorage.setItem("userId", userId);
    console.log("reached");
    
  }

  updateUser(userId: any) {
    this.userservice.updateUser(userId).subscribe((res => {
      console.log('updated', res);
    }))
  }


  getUserlist() {
    this.userservice.getUserList().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.sort = this.sort
      this.dataSource.paginator=this.paginator
    })
  }


  filter(e: any) {
    this.dataSource.filter = e.target.value
  }
}

export interface User {
  id: string;
  fullname: string;
  username: string;
  password: string;
  phonenumber: string;
  gender: string;

}




