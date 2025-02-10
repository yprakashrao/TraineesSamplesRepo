import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
@Injectable({
  providedIn: "root"
})
export class DeleteDialogComponent {


  constructor(public dialog: MatDialog,
    private userservice: UserService) { }

  deleteData() {
    var uid:any=localStorage.getItem('userId')
    this.userservice.deleteUser(uid).subscribe(res=>{
      console.log(res);
    })
    this.dialog.closeAll()
  }


  deleteopenDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
