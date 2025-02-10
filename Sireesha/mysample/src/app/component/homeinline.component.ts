import { Component } from "@angular/core";
// import { Title } from "@angular/platform-browser";

@Component({
      selector: 'app-homeinline',
      template: `<h2>{{Title}}</h2><p>Welcome to angular frame work for webpages.</p>`,
      styles: ['h2{color:red;text-align:center}','p{color:blue;fontsize:20px}']
})

export class homeinlineComponent{
      public Title:string = "home page for angular";
}