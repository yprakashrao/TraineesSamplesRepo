import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AppLoaderService } from '../apploader/apploader.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationServiceService,
      private loader:AppLoaderService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      // this.authenticationService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             // this.alertService.error(error);
      //             this.loading = false;
      //         });
      this.loader.open("Please wait .... ");
      localStorage.setItem('currentUser', "loggedin");
      this.router.navigate(["/home"]);
       setTimeout(() => {      
          this.loader.close();
         
        }, 1000);
     
  }
}

