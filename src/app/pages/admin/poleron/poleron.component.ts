import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-poleron',
  templateUrl: './poleron.component.html',
  styleUrls: ['./poleron.component.css']
})
export class PoleronComponent {
  

  constructor(public appService: AppService){}


}
