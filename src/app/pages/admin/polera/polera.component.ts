import { Component, OnInit } from '@angular/core';
import { UIPolera } from '../../products';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-polera',
  templateUrl: './polera.component.html',
  styleUrls: ['./polera.component.css']
})
export class PoleraComponent  {
  poleras: UIPolera[] = [];

  constructor(public appService: AppService){}



  
}
