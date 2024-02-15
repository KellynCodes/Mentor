import { PaginationQueryDto } from 'src/core/types/dto/request.query.dto';
import { HttpResponse } from './../../types/dto/http.response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './Dto/user.dto';
import { CourseResponseDto } from '../course/Dto/course-response.dto';

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

  getCourses(
    query: PaginationQueryDto
  ): Observable<HttpResponse<CourseResponseDto[]>> {
    const url: string = `user/courses?page=${query.pageNumber}&limit=${query.pageSize}&keyword=${query.keyword}`;
    return this.http.get<HttpResponse<CourseResponseDto[]>>(url);
  }
}
