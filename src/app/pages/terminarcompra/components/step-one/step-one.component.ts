import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent {
  @Output()sendNextStep= new EventEmitter<number>();

  nextStage(){
    this.sendNextStep.emit(2);
  }
}
