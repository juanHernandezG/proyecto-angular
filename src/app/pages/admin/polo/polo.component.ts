import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {

  constructor(public appService: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }
}
