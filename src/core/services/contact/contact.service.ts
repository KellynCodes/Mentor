import { Injectable } from '@angular/core';
import { ContactDto } from './dtos/contact.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../../core/types/dto/http.response.dto';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  contact(model: ContactDto): Observable<HttpResponse> {
    return this.http.post<HttpResponse>('contact', model);
  }
}
