import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es';
  out:string;
  riempi(event){
    this.out = event;
      console.log("out", event);
  }

}
