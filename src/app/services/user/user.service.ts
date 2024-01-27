import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from '../../data/Dto/shared/request.query.dto';
import { HttpResponse } from '../../data/Dto/shared/http.response.dto';
import { UserDto } from './Dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  UpdateUser(id: string, model: UserDto): Observable<HttpResponse<UserDto>> {
    return this.http.put<HttpResponse<UserDto>>(`user/${id}`, model);
  }
  PatchUpdateUser(id: string, model: UserDto) {}

  getUser(id: string): Observable<HttpResponse<UserDto>> {
    return this.http.get<HttpResponse<UserDto>>(`user/${id}`);
  }

  getUsers(query: PaginationQueryDto): Observable<HttpResponse<UserDto[]>> {
    const url: string = `user/get-all?page=${query.pageNumber}&limit=${query.pageSize}&keyword=${query.keyword}`;
    return this.http.get<HttpResponse<UserDto[]>>(url);
  }

  deleteUser(id: string): Observable<HttpResponse> {
    return this.http.delete<HttpResponse>(`user/${id}`);
  }
}
