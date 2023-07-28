import { Component, OnInit } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { AppService } from '../../app.service';
import { Allproduct, Polera, UIPolera } from '../../products';

@Component({
  selector: 'app-mantenedor-productos',
  templateUrl: './mantenedor-productos.component.html',
  styleUrls: ['./mantenedor-productos.component.css']
})
export class MantenedorProductosComponent implements  OnInit {

  product: Allproduct[] = [];
  
  constructor(private appService: AppService){}

  ngOnInit(): void {
    this.appService.getAllproducts().subscribe(data => {
      this.product = data;
    });
  }

}
