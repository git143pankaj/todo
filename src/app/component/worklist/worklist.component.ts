import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent implements OnInit {

  worklist: any;
  

  // divShow : boolean = false;
  // isShowDiv = false;
  // isShowDivIf = false;

  myHtml: string = '';
  appendedHtml: string = `<div class="body-box">I am Added</div>`;




  constructor(private _todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this._todoService.getWork().subscribe(res => {
      this.worklist = res;
    })
  }

  deleteWorkList(id: number) {
    this._todoService.deleteWork(id).subscribe(res => {
      console.log(res);
      this.getDataFromServer();
    })
  }

  editWrokList(id) {
    console.log(id);
    this.router.navigate(['editwork', id]);
  }

  addList(): void {
    // alert("I am added");
   this.myHtml = this.myHtml + this.appendedHtml;
    // this.router.navigate([`${pagename}`])
  }


  // addnewList(){
  //   alert("I am added new list");
  // }

  // gotoPage(pagename: string): void {
  //   this.router.navigate([`${pagename}`])
  // }




}
