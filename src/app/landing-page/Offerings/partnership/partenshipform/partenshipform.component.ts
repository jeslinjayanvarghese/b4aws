import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-partenshipform',
  templateUrl: './partenshipform.component.html',
  styleUrls: ['./partenshipform.component.css',
]
})
export class PartenshipformComponent implements OnInit {
 
 
  partner = {
    name: '',
    email: '',
    phone: '',
    firm: '',
    address: '',
    district: '',
    officeSpace: '',
    report: '',
    expect: '',
    profile: '',
    employeeCount: ''
  }

  constructor(private fb: FormBuilder, private landingService: LandingService, private router: Router) { }

  validatePartnerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
      ])],
      firm: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      officeSpace: ['', Validators.required],
      report: ['', Validators.required],
      expect: ['', Validators.required],
      profile: ['', Validators.required],
      employeeCount: ['', Validators.required]

    }
  )

  newPartner() {  
    this.landingService.partnerSubmit(this.partner).subscribe((data: any)=>{
      console.log(data);
      }) 
      alert("Registration Successfull");
      window.location.reload();
      // this.router.navigate(['/partnership']);
  }

  ngOnInit(): void {
  }

}
