import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Form } from '../models/form';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  submitForm(form: Form): Observable<any> {
    return this.http.post(this.url + 'Resume/SendNotificationEmail' , form);
  }
}
