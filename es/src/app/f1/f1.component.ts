import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component implements OnInit {

  @Output() nomeOutput = new EventEmitter<string>();

   f1 : FormGroup;
   input:string;
  constructor(fb: FormBuilder) { 
    
      this.f1 = fb.group({
         nome: ["", Validators.required] 
        
         
    });
}

  ngOnInit() {
  }

  click(){
        if(!this.f1.invalid) // se tutti gli imput sono ok 
    {
      


      
      //Assegno gli input 
      
      this.input =  this.f1.controls['nome'].value;
     console.log(this.input)
     
     this.nomeOutput.emit(this.input);
 
  }
  

  
  

   
 }

}
