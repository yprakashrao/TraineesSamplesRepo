import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   componentName = "home"
   constructor(){}

   ngOnInit():void{
   }

   public sum(){
    return 100
   }

}
