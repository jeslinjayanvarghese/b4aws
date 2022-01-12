import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  event:any=[];
  EventReg:any={
    name: '',
    email:'', 
    phoneno:'',
    eventTitle:'',
    eventAmount:''
  };

  constructor(private fb: FormBuilder,private router:Router,private landingService: LandingService,private activatedrouter:ActivatedRoute) { }

  ngOnInit(): void {

//animation effects
    AOS.init();

//singleevents
      this.activatedrouter.paramMap.subscribe((params) =>
      {        
        console.log(params.get("id"));
        this.landingService.getEventId(params.get("id")).subscribe((data:any)=>{
          console.log("event check ts");
          console.log(this.event);
          this.event=data;
         
        })
      })
      
    }
      
  //Course Registration
  newReg(){ 
    
    this.landingService.regSubmitEvent(this.EventReg,this.event.eventname,this.event.eventRegFee).subscribe((data: any)=>{
      console.log(data +"ts");
      }) 
      alert("Registration Successfull");
      window.location.reload();
  }


}
