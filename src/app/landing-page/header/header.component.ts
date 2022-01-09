import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/admin-dashboard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courses:any=[];
  events:any='';

  admin:any=[];

  userLogin = {
    email: '',
    password: ''
  }


  constructor(private router:Router,private landingService: LandingService, public authService: AuthService) { }

  //login
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  loginAdmin()
  {
    this.router.navigate(['/dashboard']);
  }


  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }


  //courses
  ngOnInit(): void {
    this.landingService.getCourses().subscribe((data: any)=>{
      this.courses=data;
      }) 

  //events
    this.landingService.getEvent().subscribe((data: any)=>{
      this.events=data;
      }) 
  }

  //login

  loginUser() {
    if(this.userLogin.email==""&&this.userLogin.password=="") {
      Swal.fire(
        'Warning!!',
        'Please enter email & password!',
        'error')
        .then (
          refresh =>{
            window.location.reload();
        }) 
    }
    console.log("data reached first")
    this.authService.loginUser(this.userLogin)
    .subscribe(
      response => {
        console.log("data reached ")
        // let result = response;
        if (response.token) {
          localStorage.setItem('token', response.token)
          localStorage.setItem('add', response.add)
          localStorage.setItem('edit', response.edit)
          localStorage.setItem('delete', response.delete)
          localStorage.setItem('superadmin', response.superadmin)

          // this.auth.role = response.role
          // localStorage.setItem('user1', JSON.stringify(response.user))
          // alert("Admin Logged Successfully")
          Swal.fire("Successfully LoggedIn", "success")
          console.log("SuperAdmin logged", response.token)
          console.log("admin logged",response.role)
          this.router.navigate(['/adminpage']);
        } else  {
          Swal.fire(
            'Warning!!',
            'admin not found!',
            'error')
            .then (
              refresh =>{
                window.location.reload();
            }) 
        }
        
      })

    


      // .subscribe((data) => {
      //   console.log("login", data)
      //   this._router.navigate(['../login'])
      // })

  }
        
}
