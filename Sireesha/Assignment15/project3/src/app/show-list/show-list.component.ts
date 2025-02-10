import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})


export class ShowListComponent implements OnInit {
any: any;

  constructor(private http: HttpClient, private router: Router,public dialog: MatDialog) { }
  
  form: any;
  data:any;
  errormsg: boolean = false;
  successmsg: boolean = false;
 
  displayedColumns: any[] = ['id', 'fullname', 'username', 'gender', 'phonenumber', 'edit', 'delete'];
  @ViewChild(MatSort) matSort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  ngOnInit(): void {
       this.form = [{
            "id": 1,
            "fullname": "suneel",
            "username": "kumar",
            "gender": "Male",
            "phonenumber": 44242423432
          },
          {
            "id": 2,
            "fullname": "Latha",
            "username": "kumar",
            "gender": "Male",
            "phonenumber": 44242423432
          }
          ];
          this.data = new MatTableDataSource(this.form);
          this.data.sort = this.matSort;
           this.data.paginator = this.paginator
          
    this.getData();
      
      }
//for posting data
      getData(){
          this.http.get("http://192.168.0.227:8080/users")
        .subscribe(
        (res: any) => {
          console.log(res);
          this.data = new MatTableDataSource(res.data);
          this.data.sort = this.matSort;
          this.data.paginator = this.paginator;
        });
      }

//for deleting data
      deleteData(id: any) {
        this.http.delete("http://192.168.0.227:8080/users/delete"+id)
          .subscribe((res:any) => {
            console.log(res.status);
            if (res.status === 200) {
              this.successmsg = true;
              console.log(this.successmsg )
              this.getData();
            }

            else {
              this.errormsg = true;
            }

          })
         
      }
      
// for Edit data
  editData(){

}


      openDialog(action: any,obj: { action: any; }) {
          obj.action = action;
          const dialogRef = this.dialog.open(DialogboxComponent, {
            width: '250px',
            data:obj
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result.event == 'Add'){
              this.addRowData(result.data);
            }else if(result.event == 'Update'){
              this.updateRowData(result.data);
            }else if(result.event == 'Delete'){
              this.deleteRowData(result.data);
            }
          });
        }
      
        addRowData(data:any){
          var d = new Date();
          this.data.push({
            id:d.getTime(),
            name:data.name
          });
          this.table.renderRows();
          
        }
        updateRowData(row_obj:any){
          this.data = this.data.filter((value :any,key:any)=>{
            if(value.id == row_obj.id){
              value.name = row_obj.name;
            }
            return true;
          });
        }
        deleteRowData(row_obj:any){
          this.data = this.data.filter((value:any,key:any)=>{
            return value.id != row_obj.id;
          });
        }


        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.data.filter = filterValue.trim().toLowerCase();
      
          if (this.data.paginator) {
            this.data.paginator.firstPage();
          }
        }
      }



       

    // editData(id: any) {
    //   this.router.navigate(['Edit', id]);

    // }
      
    


















    //static data



    