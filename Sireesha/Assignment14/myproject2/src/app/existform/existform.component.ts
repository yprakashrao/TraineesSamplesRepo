import { Component } from '@angular/core';
import { ShowApiService } from '../show-api.service';

@Component({
  selector: 'app-existform',
  templateUrl: './existform.component.html',
  styleUrls: ['./existform.component.css']
})


export class ExistformComponent {
  constructor(private showApiService: ShowApiService) { }

  Search: any;
  data: any;
  resp:any;

  searchPat(data: any) {
    this.showApiService.existcall(data.firstname, data.lastname, data.phone).
    subscribe((res: any) => {
    this.resp = res.data;
      console.log(this.resp);
    });

    this.showApiService.existcall1(data.firstname,data.phone).
    subscribe((res: any) => {
    this.resp = res.data;
      console.log(this.resp);
    });

    // this.showApiService.existcall2(data.firstname,data.lastname).
    // subscribe((res: any) => {
    // this.resp = res.data;
    //   console.log(this.resp);
    // });

    // this.showApiService.existcall3(data.lastname,data.phone).
    // subscribe((res: any) => {
    // this.resp = res.data;
    //   console.log(this.resp);
    // });

    // this.showApiService.existcall4(data.firstname).
    // subscribe((res: any) => {
    // this.resp = res.data;
    //   console.log(this.resp);
    // });

    // this.showApiService.existcall5(data.phone).
    // subscribe((res: any) => {
    // this.resp = res.data;
    //   console.log(this.resp);
    // });

    // this.showApiService.existcall6(data.lastname).
    // subscribe((res: any) => {
    // this.resp = res.data;
    //   console.log(this.resp);
    // }); 
    
  }
}