import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.scss']
})
export class EditworkComponent implements OnInit {

  addForm: FormGroup;
  id: number;
  workdetail;

  constructor(private _fb: FormBuilder, private _todoService: TodoService, private router: Router,
    private activatedRoter: ActivatedRoute) {
    this.activatedRoter.params.subscribe(parms => {
      this.id = parms.id;
    })
  }

  ngOnInit(): void {
    this.setForm();
    this.setValue(this.id);
  }

  setForm() {
    this.addForm = this._fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(35)])],
     
    })
  }


  setValue(id) {
    this._todoService.getWorkByID(id).subscribe(res => {
      this.workdetail = res;
      this.addForm.get('id').setValue(this.workdetail.id);
      this.addForm.get('name').setValue(this.workdetail.name);
      
    })
  }

  addFormSubmit() {
    if (this.addForm.invalid) {
      return false;
    }
    this._todoService.editWork(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['worklist']);
    })
  }

}
