import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.scss']
})
export class AddworkComponent implements OnInit {

  addForm: FormGroup;

  workLength;

  constructor(private _fb: FormBuilder, private router:Router, private _todoService:TodoService) { }

  ngOnInit(): void {
    this.setForm();
    this.getStudentLength();
  }

  setForm() {
    this.addForm = this._fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(35)])],
     
    })
  }

  getStudentLength(){
    this._todoService.getWork().subscribe(res=>{
      console.log(res.length)
      this.workLength = res.length+1;
      this.addForm.patchValue({id:this.workLength});
    })
  }

  addFormSubmit(){

    if(this.addForm.invalid){
      return false;
    }

    this._todoService.addWork(this.addForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['worklist']);
    })
    
  }

}
