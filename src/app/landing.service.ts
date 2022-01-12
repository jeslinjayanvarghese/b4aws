import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

    server_address: string ='/api';
//server_address: string ='http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  //Install Better Comments in VScode


  //!Login

  adminCheck(admin: any){
    return this.http.post<any>(`${this.server_address}/login`,admin);
    }


  //!About


  //?------------Industrial------------
  getIndustrial(){
    return this.http.get<any>(`${this.server_address}/industry`);
  }

  //?-----------Knowledge--------------
  getKnowledge(){
    return this.http.get<any>(`${this.server_address}/knowledge`);
  }

  //?----------Leaders-------------------
  getLeaders(){
    return this.http.get<any>(`${this.server_address}/staff/leaders`);
  }

  //?-----------Patrons-------------------
  getPatrons(){
    return this.http.get<any>(`${this.server_address}/patrons`);
  }

  //?-----------Teams---------------------
  getTeams(){
    return this.http.get<any>(`${this.server_address}/staff/team`);
  }

  //!Courses

  //?---------------MainPage-----------------------
  getCourses(){
    return this.http.get<any>(`${this.server_address}/course`);
  }
 
  //?-------------SinglePageCourse----------------
    getCourseId(id:any){
      return this.http.get<any>(`${this.server_address}/course/courseSingle/`+id);
    }

    regSubmit(course: any,courseTitle: any,courseRegFee: any){
   
      return this.http.post(`${this.server_address}/registration/courseRegister`,{"c":course,"ct":courseTitle,"cf":courseRegFee});
    }

  
  //!Offerings
  //?--Academic
  getMembers(){
    return this.http.get<any>(`${this.server_address}/academic`);
  }

  //?Corporate
  formSubmit(corporate: any){
    console.log(corporate);
    return this.http.post(`${this.server_address}/CorporateApplication`,{"members":corporate})
  }

  //?Partnership
    partnerSubmit(partner: any){
      console.log(partner);
      return this.http.post(`${this.server_address}/PartnershipApplication`,{"members":partner})
    }
  

 

  //!Testimonials
  getTestimonial(){
    return this.http.get<any>(`${this.server_address}/hometestimonials`);
  }

  //!Testimonials
    getCourseTestimonial(cname:any){
      console.log(cname,"service");
      return this.http.post<any>(`${this.server_address}/CourseTestimony/individual`,{"c":cname});
    }

  //!Events

  //?Header
  getEvent(){
    return this.http.get<any>(`${this.server_address}/events`);
  }
  //?SingleEvent
  getEventId(id:any){
    console.log("service single events");
    return this.http.get<any>(`${this.server_address}/events/single/`+id);
  }

  //?EventReg
  regSubmitEvent(event: any,eventTitle: any,eventRegFee: any){
    return this.http.post<any>(`${this.server_address}/registrationevent/eventRegister`,{"e":event,"et":eventTitle,"ef":eventRegFee});
  }

  //!ContactUs

  // //?contactsubmit
  // contactSubmit(contact: any){
  //   console.log(contact, "service");
  //   return this.http.post<any>(`${this.server_address}/contact/contactRegister`,{"co":contact});
  // }

  //?contact
  contactUs(contact: any){
  console.log(contact,"service");
  return this.http.post<any>(`${this.server_address}/contact/contactRegister`,contact);
  }

}
