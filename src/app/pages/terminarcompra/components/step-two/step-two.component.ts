import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {
  
  @Output()sendNextStep= new EventEmitter<number>();

  @Output()sendAfterStep= new EventEmitter<number>();


  constructor( private router:Router, 
                private fb: FormBuilder ){}

  miFormulario: FormGroup = this.fb.group({
    checkRadio: [ , Validators.required ]
  });

  seleccion = {
    checkRadio: 1,
  }
  
  ngOnInit(): void {
    this.miFormulario.setValue(this.seleccion);

    this.miFormulario.valueChanges.subscribe( form =>{
      this.seleccion = form;
    } )
    
  }
  
  afterStage(){
    this.sendAfterStep.emit(1);
  }

  nextStage(){
    this.sendNextStep.emit(3);
    // this.router.navigate(['./register/step-three']);
  }

  guardar(){
  if(this.miFormulario.invalid){
    return Object.values(this.miFormulario.controls).forEach(control =>{
      control.markAllAsTouched();
    })
  } if (this.miFormulario.valid){
      this.nextStage();
  }

  const formValue = { ...this.miFormulario.value };

  console.log(this.miFormulario.value);
  this.miFormulario.reset();
    
  }
}
