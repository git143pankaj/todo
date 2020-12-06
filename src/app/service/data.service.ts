import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
 
  createDb(){

    let works = [
      {id:1, name:'Electric Bill Pay', phone:'8945652511', email:'satiish@gmail.com'},
      {id:2, name:'Grocery Bill Pay', phone:'8945652511', email:'pankaj@gmail.com'},
      {id:3, name:'Iron Clothes', phone:'8945652511', email:'ritesh@gmail.com'},
      {id:4, name:'Deposite in Bank', phone:'8945652511', email:'pawan@gmail.com'},
      {id:5, name:'Talk with Mom', phone:'8945652511', email:'samir@gmail.com'},
      {id:6, name:'Evening Marketing', phone:'8945652511', email:'ajeet@gmail.com'},
      {id:7, name:'Laptop Service', phone:'8945652511', email:'chandan@gmail.com'}
    ]
    return {works}

  }
}
