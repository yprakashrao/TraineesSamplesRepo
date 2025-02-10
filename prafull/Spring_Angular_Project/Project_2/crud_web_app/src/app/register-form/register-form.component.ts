import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { NgModelGroup } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  
  massage:string;
  User:User[]= [];
  mystatus: any = 0 
  submitted = false;
  isRegister:boolean=false;
  isError:boolean=false;
  constructor(private fb: FormBuilder,private user: UserService) { }


  RegisterForm:FormGroup = this.fb.group({

    // fullname: new FormControl('', [Validators.required, Validators.minLength(2),
    // Validators.maxLength(20),
    // Validators.pattern(/^[a-zA-Z]*$/)]),

    // username: new FormControl('', [Validators.required, Validators.minLength(2),
    // Validators.maxLength(15),  
    // Validators.pattern(/^[a-zA-Z]*$/)]),

    // password:new FormControl('',[Validators.required,
    // Validators.maxLength(20),Validators.minLength(8),
    // Validators.pattern(/^[a-zA-Z][0-9][@$#*&?_!]*$/)]),

    // phonenumber: new FormControl('', [Validators.required,
    // Validators.pattern(/^[0-9]*$/),
    // Validators.minLength(10),
    // Validators.maxLength(10)]),

    // gender: new FormControl('', [Validators.required])
   

    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    phonenumber: ['', [Validators.required,]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password1: ['', [Validators.required, Validators.minLength(8)]]

  })

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form:any) {
      this.user.saveUser(form.value).subscribe((res:any) => {
        console.log(res);
        
        if (res.status == 200) {
          this.isRegister=true;
          
        }
        else if(res.status==404){
          this.isError=true;
        }
        form.reset()        
      // this.mystatus = res.status
      // console.log(this.mystatus);
      // form = true;
    })
  }

  get fullname(): FormControl {
    return this.RegisterForm.get("fullname") as FormControl;
  }
  get username(): FormControl {
    return this.RegisterForm.get("username") as FormControl;
  }
  get password(): FormControl {
    return this.RegisterForm.get("password") as FormControl;
  }
  get password1(): FormControl {
    return this.RegisterForm.get("password") as FormControl;
  }
  get phone(): FormControl {
    return this.RegisterForm.get("phonenumber") as FormControl;
  }
  get gender(): FormControl {
    return this.RegisterForm.get("gender") as FormControl;
  }
  
}
