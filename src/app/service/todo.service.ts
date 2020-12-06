import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private BASE_PATH_URL = "/api/works";

  constructor(private http: HttpClient) { }

  getWork(): Observable<any> {
    return this.http.get(this.BASE_PATH_URL);
  }

  getWorkByID(id) {
    return this.http.get(this.BASE_PATH_URL + '/' + id);
  }

  addWork(workdetail): Observable<any> {
    return this.http.post(this.BASE_PATH_URL, workdetail);
  }

  deleteWork(id) {
    return this.http.delete(this.BASE_PATH_URL + '/' + id);
  }

  editWork(workdetail) {
    return this.http.put(this.BASE_PATH_URL + '/' + workdetail.id, workdetail);
  }
}
