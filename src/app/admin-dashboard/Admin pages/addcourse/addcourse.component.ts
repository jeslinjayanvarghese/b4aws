import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
// import { Editor,Toolbar } from 'ngx-editor';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AddcourseComponent implements OnInit {
  
  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
};
  // public iframe: object = { enable: true };
  public height: number = 200;
 

  //  editor:any = Editor
  //  toolbar: Toolbar = [
  //   ["bold", "italic"],
  //   ["underline", "strike"],
  //   ["code", "blockquote"],
  //   ["ordered_list", "bullet_list"],
  //   [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
  //   ["link", "image"],
  //   ["text_color", "background_color"],
  //   ["align_left", "align_center", "align_right", "align_justify"]
  // ];


    course:any = {
      courseTitle: "",
      courseShortName: "",
      courseType: "", //to be added
      courseImage: "",
      courseAbout: "", // is same as LongDes
      courseAgenda: "",
      courseFee: "",
      lastDateReg: "",
      EntranceExamDate : "",
      commencementDate : "",
      orientationDate : "",
      courseCategory : "",

      Objectives: "",
      courseRegFee : "",
      courseDuration : "",
      Reg_Status: 1,
      samplequestion : "",
      placementlist : "",
      // samplecertificate: String,
      internshipcertificate : "",
      shortDesc : "",
      // LongDes : "",
      // course_delivery : "",
      // internship_partner : "",
      // knowledge_partner : "",
      index: 0,
      active: true,
    
  }
  
   
  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";


  selectedFile: any = null;
  formData: any = {};

  fd = new FormData();
  
  images:any

  constructor(private Adminserve: AdminServiceService, private router: Router, private route: ActivatedRoute) { 
    
    
  }


  // createFormData(event:any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fd.append('image', this.selectedFile, this.selectedFile.name);
  //  }
 

  AddcourseForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    short:new FormControl('',[Validators.required]),
    status: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    about:new FormControl('',[Validators.required]),
    entrance: new FormControl('', [Validators.required]),  
    commencement:new FormControl('',[Validators.required]),
    orientation: new FormControl('', [Validators.required]),  
    sdate:new FormControl('',[Validators.required]),
    fee: new FormControl('', [Validators.required]),  
    regfee:new FormControl('',[Validators.required]),
    duration: new FormControl('', [Validators.required]),
    agenda:new FormControl('',[Validators.required]),
    sample: new FormControl('', [Validators.required]),
    placement: new FormControl('', [Validators.required]),
    intern: new FormControl('', [Validators.required]),
    img: new FormControl('',[Validators.required]),
  })

  addCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.AddcourseForm.get('title');
  }
  get name()
  {
    return this.AddcourseForm.get('name');
  }
  get type()
  {
    return this.AddcourseForm.get('type');
  }
  get short()
  {
    return this.AddcourseForm.get('short');
  }
  get status()
  {
    return this.AddcourseForm.get('status');
  }
  get category()
  {
    return this.AddcourseForm.get('category');
  }
  get about()
  {
    return this.AddcourseForm.get('about');
  }


  get entrance()
  {
    return this.AddcourseForm.get('entrance');
  }
  get commencement()
  {
    return this.AddcourseForm.get('commencement');
  }
  get orientation()
  {
    return this.AddcourseForm.get('orientation');
  }
  get sdate()
  {
    return this.AddcourseForm.get('sdate');
  }
  get fee()
  {
    return this.AddcourseForm.get('fee');
  }
  get regfee()
  {
    return this.AddcourseForm.get('regfee');
  }
  get duration()
  {
    return this.AddcourseForm.get('duration');
  }
  get agenda()
  {
    return this.AddcourseForm.get('agenda');
  }
  get sample()
  {
    return this.AddcourseForm.get('sample');
  }
  get placement()
  {
    return this.AddcourseForm.get('placement');
  }
  get intern()
  {
    return this.AddcourseForm.get('intern');
  }
  get img()
  {
    return this.AddcourseForm.get('img');
  }

  ngOnInit(): void {
    // this.editor = new Editor();

  }

  // make sure to destory the editor
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }

  //course image upload
  courseImage(event: any) {
    
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }
  
  // courseDelivery(event: any){
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fd.append('file2', this.selectedFile, this.selectedFile.name);
  // }

  // courseIntern(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fd.append('file3', this.selectedFile, this.selectedFile.name);
  // }

  // courseKnowledge(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fd.append('file4', this.selectedFile, this.selectedFile.name);
  // }


  AddCourse() {
   
    console.log("vannee", this.course)
    
    for (const prop in this.course)
    {
      this.fd.append(prop, this.course[prop]);
    }
  
    this.Adminserve.newCourse(this.fd).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })

        }
      })
  }

 



}
