import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
    users: User[] = [];
    create:any[]=[];
    constructor(private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
      let value = JSON.parse((localStorage.getItem('create')! as any) || '{}');
      this.create.push(value)
      console.log(this.create);
    }
 
    
    
    userDetails(id: number){
      this.router.navigate(['user-details', id]);
    }
    updateUser(id: number){
      this.router.navigate(['update-user', id]);
    }

    deleteUser(id: number){
      this.userService.deleteUser(id).subscribe( data => {
        console.log(data);
    
      })
    }

}
