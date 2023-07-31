import { Component, OnInit } from '@angular/core';
import { UIPolera, UIProd } from '../../products';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-polera',
  templateUrl: './polera.component.html',
  styleUrls: ['./polera.component.css']
})
export class PoleraComponent implements OnInit {
  poleras: UIPolera[] = [];

  prod:UIProd[] = [];
  constructor(public appService: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }


  
}
