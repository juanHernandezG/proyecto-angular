import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { UIPoleron } from '../../products';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {
  polo: UIPoleron[]=[];

  constructor(public appService: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.getAllpolo().subscribe(data =>{
      this.polo = data;
    });
  }
}
