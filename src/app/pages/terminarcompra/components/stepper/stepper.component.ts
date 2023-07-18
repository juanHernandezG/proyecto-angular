import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  circles = document.querySelectorAll(".circles");
   progressBar = document.querySelector(".indicator");
   buttons = document.querySelectorAll("buttons");
  

   @Input()
  actualStep: number | undefined;
}
