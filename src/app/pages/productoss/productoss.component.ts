import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-productoss',
  templateUrl: './productoss.component.html',
  styleUrls: ['./productoss.component.css']
})
export class ProductossComponent implements OnInit {

  tipos: any[] = [];

  constructor(private tipoService: AppService){
    this.tipoService.getTipo().subscribe(data => {
      this.tipos = data;
      console.log(data);
    });  
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tipoService.getTipo().subscribe(data => {
      this.tipos = data;
      console.log(data);
    });
  }

}
