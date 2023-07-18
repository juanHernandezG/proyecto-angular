import { NgModule } from "@angular/core";
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepperComponent } from "./components/stepper/stepper.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { TerminarcompraComponent } from "./terminarcompra.component";


@NgModule({
    declarations: [
  
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        
    ],
})
export class terminarcompraModule{}