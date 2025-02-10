import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})

export class NewformComponent {
  currentDate:any =new Date();
  // minDate = new Date();
  initialProfileVal = null;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  id: any;
  data: any;
  showEditForm = false;
  


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // alert("Kumar" + this.id);
    if (this.id != null || this.id != undefined) {
      this.getPatientDetails(this.id);
    }
  }


  getPatientDetails(id: any) {
    // alert("suneel " + id);
    this.showEditForm = true;
    this.http.get("http://192.168.0.227:8080/backend/patients")
      .subscribe(
        (res: any) => {
          // console.log(res);
          this.data = res.data;
          this.showEditForm = true;

        });
    // this.data = [{
    //   "id": 1,
    //   "firstname": "uneel",
    //   "lastname": "kumar",
    //   "age": 40,
    //   "gender": "Male",
    //   "phone": 44242423432
    // }
    // ];
    // alert(this.data[0].firstname);
  }
  // handleSubmit(form: any) {
  //   console.log(form.value);
  //   form.reset();
  // }

  //   show(f:any){
  //     console.log(f.value);
  //   }

  resetUserForm(userForm: any) {
    userForm.resetForm();
    this.initialProfileVal = null;
  }


  onSubmit(data: any) {
    this.http.post("http://192.168.0.227:8080/backend/patients", data)
      .subscribe((res) => {
        console.log(res);
      });
    console.log(data);
  }
}