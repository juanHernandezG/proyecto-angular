import { Component } from '@angular/core';

@Component({
  selector: 'app-terminarcompra',
  templateUrl: './terminarcompra.component.html',
  styleUrls: ['./terminarcompra.component.css']
})
export class TerminarcompraComponent {
  actualStep: number;

  constructor(){
    this.actualStep=1;
  }
}
