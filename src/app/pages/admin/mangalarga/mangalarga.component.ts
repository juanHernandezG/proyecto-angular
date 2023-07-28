import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { UIMangalarga } from '../../products';

@Component({
  selector: 'app-mangalarga',
  templateUrl: './mangalarga.component.html',
  styleUrls: ['./mangalarga.component.css']
})
export class MangalargaComponent implements OnInit{
  mangalarga: UIMangalarga[]=[];

  constructor(public appService: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.getAllmangalarga().subscribe(data =>{
      this.mangalarga = data;
    });
  }

}
