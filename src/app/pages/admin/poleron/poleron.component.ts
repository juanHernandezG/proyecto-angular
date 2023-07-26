import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { UIPoleron } from '../../products';

@Component({
  selector: 'app-poleron',
  templateUrl: './poleron.component.html',
  styleUrls: ['./poleron.component.css']
})
export class PoleronComponent implements OnInit {
  poleron: UIPoleron[]=[];

  constructor(public appService: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.getAllpoleron().subscribe(data =>{
      this.poleron = data;
    });
  }
}
