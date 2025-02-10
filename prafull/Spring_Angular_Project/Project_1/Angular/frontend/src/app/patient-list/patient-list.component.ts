import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../patient.service';
import { MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-patient-list',
  styleUrls: ['./patient-list.component.css'],
  templateUrl: './patient-list.component.html',
})

export class PatientListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'phone', 'gender'];
  dataSource = new MatTableDataSource();

  constructor(private _liveAnnouncer: LiveAnnouncer, private patientservice: PatientService) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
  }


  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    this.getPatients()
  };

  getPatients() {
    this.patientservice.getPatientList().subscribe((res: any) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.sort = this.sort
    })
  }
}


