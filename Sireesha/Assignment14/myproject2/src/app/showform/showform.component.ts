import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.css']
})


export class ShowformComponent implements OnInit {

  @ViewChild(MatSort) matSort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router) { }

  data: any;
  columns = ['id', 'firstname', 'lastname', 'age', 'gender', 'phone', 'edit', 'delete'];

  ngOnInit(): void {
    this.http.get("http://192.168.0.227:8080/backend/patients")
      .subscribe(
        (res: any) => {
          console.log(res);
          this.data = new MatTableDataSource(res.data);
          this.data.sort = this.matSort;
          this.data.paginator = this.paginator;
        });

    // this.data = [{
    //   "id": 1,
    //   "firstname": "suneel",
    //   "lastname": "kumar",
    //   "age": 40,
    //   "gender": "Male",
    //   "phone": 44242423432
    // },
    // {
    //   "id": 1,
    //   "firstname": "suneel",
    //   "lastname": "kumar",
    //   "age": 40,
    //   "gender": "Male",
    //   "phone": 44242423432
    // }
    // ];
  }


  deleteData(id: any) {
    this.http.delete("http://192.168.0.227:8080/backend/patients/"+id)
      .subscribe((res) => {
        console.log("deleted successfully");
      })
      this.http.get("http://192.168.0.227:8080/backend/patients")
      .subscribe((res)=>{
        console.log("after delete data is updated");
      })
  }


  editData(id: any) {
    this.router.navigate(['Edit', id]);

  }

  filter(e: any) {
    this.data.filter = e.target.value;
  }

}
