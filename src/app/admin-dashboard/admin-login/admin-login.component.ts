import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AuthService} from '../auth.service'
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userLogin = {
    email: '',
    password: ''
  }

  constructor(private _router: Router,private auth:AuthService,private router:Router) { }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  loginAdmin()
  {
    this._router.navigate(['/dashboard']);
  }


  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }


  

  ngOnInit(): void {
  }

  loginUser() {
    if(this.userLogin.email==""&&this.userLogin.password=="") {
      Swal.fire(
        'Warning!!',
        'Please enter email & password!',
        'error')
    }
    console.log("data reached first")
    this.auth.loginUser(this.userLogin)
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
          localStorage.setItem('user', response.superadmin)

          // this.auth.role = response.role
          // localStorage.setItem('user1', JSON.stringify(response.user))
          // alert("Admin Logged Successfully")
          Swal.fire("Successfully LoggedIn", "success")
          console.log("SuperAdmin logged", response.token)
          console.log("admin logged",response.role)
        
          this._router.navigate(['/adminpage']);
          
        
        } else {
          Swal.fire(
            'Warning!!',
            'admin not found!',
            'error')
            // .then (
            //   refresh =>{
            //     let currentUrl = this.router.url;
            //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            //         this.router.navigate([currentUrl]);
            //     });    
            // }) 
        }
        if (this.userLogin.email != response.user && this.userLogin.password != response.user) {
          
          Swal.fire(
            'Warning!!',
            'admin not found!',
            'error')
            .then (
              refresh =>{
                let currentUrl = this.router.url;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                });    
            }) 
        }
        
      })

    


      // .subscribe((data) => {
      //   console.log("login", data)
      //   this._router.navigate(['../login'])
      // })

  }
  

}
