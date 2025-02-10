import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';


export interface Dialog {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})

export class TabledataComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  @ViewChild(MatSort)
  sort:MatSort;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns = [
    'name',
    'position',
    'weight',
    'symbol',
    'star',
  ];
  
 

  dataSource: MatTableDataSource<any> = new MatTableDataSource(ELEMENT_DATA);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
    });
  }

  openDelete(){
    this.dialog.open(DialogDelete,{
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dialog',
  templateUrl:'../dialog/dialog.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Dialog) {}
}

@Component({
  selector: 'app-dialog',
  templateUrl:'../dialog/dialog.component.html',
})
export class DialogDelete{
  constructor(@Inject(MAT_DIALOG_DATA)public data:Dialog){}
}


