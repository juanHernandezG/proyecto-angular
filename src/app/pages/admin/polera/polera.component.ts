import { Component, OnInit } from '@angular/core';
import { UIPolera } from '../../products';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-polera',
  templateUrl: './polera.component.html',
  styleUrls: ['./polera.component.css']
})
export class PoleraComponent implements OnInit {
  poleras: UIPolera[] = [];

  constructor(public appService: AppService){}

  ngOnInit(): void {
    this.appService.getAllpoleras().subscribe(data =>{
      this.poleras = data;
    });
  }

  
}
