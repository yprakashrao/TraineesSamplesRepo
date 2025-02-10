import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  ElementID: any;
  errormsg: boolean = false;
  successmsg: boolean = false; 

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.ElementID = localStorage.getItem('elementToDelete')
  }

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

      Authorization: 'Basic ' + btoa('siri123:Password@2'),

    }),

  };

  deleteElement() {

    this.http.delete(`http://localhost:8080/users/delete/${this.ElementID}`,this.httpOptions)
      .subscribe((res: any) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log("deleted ");
          window.location.reload();
          this.successmsg = true;
          console.log(this.successmsg)
          
        }

        else {
          this.errormsg = true;
        }

      })
  }
}
