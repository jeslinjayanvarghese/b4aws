import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor( private router: Router,
    private landingService: LandingService) { }

    // contact: any=[];
    contact={
      name: '',
      email: '',
      coursename: '',
      subject:''
    }

  ngOnInit(): void {
  }

 //Contact Registration
 newContact() {
   console.log(this.contact);
   this.landingService
    .contactUs(this.contact)
    .subscribe((data: any) => {
      console.log(data + 'ts');
    });
  alert('Message Send! Our Expert Team will Contact you Soon!');
  window.location.reload();
}
}
