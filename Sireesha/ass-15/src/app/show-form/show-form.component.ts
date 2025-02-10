import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  id: number;
  phonenumber: number;
  fullname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, username: 'Hydrogen', phonenumber: 1.0079, fullname: 'H'},
  {id: 2, username: 'Helium', phonenumber: 4.0026, fullname: 'He'},
  {id: 3, username: 'Lithium', phonenumber: 6.941, fullname: 'Li'},
  {id: 4, username: 'Beryllium', phonenumber: 9.0122, fullname: 'Be'},
  {id: 5, username: 'Boron', phonenumber: 10.811, fullname: 'B'},
  {id: 6, username: 'Carbon', phonenumber: 12.0107, fullname: 'C'},
  {id: 7, username: 'Nitrogen', phonenumber: 14.0067, fullname: 'N'},
  {id: 8, username: 'Oxygen', phonenumber: 15.9994, fullname: 'O'},
  {id: 9, username: 'Fluorine', phonenumber: 18.9984, fullname: 'F'},
  {id: 10, username: 'Neon', phonenumber: 20.1797, fullname: 'Ne'},
];


@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})

export class ShowFormComponent  implements AfterViewInit  {
  
  constructor() {}

  displayedColumns: string[] = [ 'id', 'username', 'phonenumber', 'fullname'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator)  MatPaginator: MatPaginator ;
  ngAfterViewInit() {
    this.dataSource.paginator = this.MatPaginator;
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
    }
 
 






















  //for posting data
//   getData(){
//     this.http.get("http://192.168.0.227:8080/users")
//   .subscribe(
//   (res: any) => {
//     console.log(res);
//     this.data = new MatTableDataSource(res.data);
//     this.data.sort = this.matSort;
//     this.data.paginator = this.paginator;
//   });
// }

//for deleting data
// deleteData(id: any) {
//   this.http.delete("http://192.168.0.227:8080/users/delete"+id)
//     .subscribe((res:any) => {
//       console.log(res.status);
//       if (res.status === 200) {
//         this.successmsg = true;
//         console.log(this.successmsg )
//         this.getData();
//       }

//       else {
//         this.errormsg = true;
//       }

//     })
   
// }



