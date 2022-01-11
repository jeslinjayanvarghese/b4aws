import { Component, OnInit } from '@angular/core';

import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-industrial-partners',
  templateUrl: './industrial-partners.component.html',
  styleUrls: ['./industrial-partners.component.css']
})
export class IndustrialPartnersComponent implements OnInit {
  image: any ='';
  industrials =(this.image);
  imageWidth:number =200;
  imageHeight:number =200;
  imageMargin:number = 2;

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getIndustrial().subscribe((data: any)=>{
    this.industrials=data;
    }) 
  }

}
