import { Component, OnInit, Input} from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ricevi',
  templateUrl: './ricevi.component.html',
  styleUrls: ['./ricevi.component.css']
})
export class RiceviComponent implements OnInit {
@Input() nomeInput : string;
 f2 : FormGroup;
   input:string;
  constructor(fb: FormBuilder) { 
    
      this.f2 = fb.group({
         
        
         
    });
}

  ngOnInit() {
  }

}
