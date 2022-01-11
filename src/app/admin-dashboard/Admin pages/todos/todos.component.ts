import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // todoArray=[];
  todo = []
  todoForm: any
  tododata = {
    todos: ""
  }
  list:any
  todoArray = []
 
  constructor(private adminServ:AdminServiceService) { }
  



  ngOnInit(): void {
    this.adminServ.getTodo().subscribe((data) => {
        this.list = data
      })
  }


  addTodo(){

    if (this.tododata.todos === "") {
      Swal.fire("Empty Submission", "Not allowed ", "error")
    }else{
    console.log("vannee",this.tododata.todos)
    
    this.adminServ.addTodo(this.tododata).subscribe((data) => { 
      console.log("vannee", data.todo)
          // window.location.reload();
    })
      }
  }

  /*delete item*/
  deleteItem(todo: any) {
    console.log("clicked")
    this.adminServ.deleteTodo(todo).subscribe((data) => {
      // window.location.reload();
      // alert("deleted successfully")
    })
  }

  // submit Form
  todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push = value.todo
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    
  }
  
}
