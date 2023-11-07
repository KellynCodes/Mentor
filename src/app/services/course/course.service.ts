import { UpdateCourseDto } from './Dto/UpdateCourseDto';
import { HttpResponse } from './../../data/Dto/shared/http.response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from '../../data/Dto/shared/request.query.dto';
import { CourseResponseDto } from './Dto/CourseResponseDto';
import { environment } from '../../../environment/environment';
import { Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  createCourse(model: FormData): Observable<HttpResponse<CourseResponseDto>> {
    const url: string = `${environment.apiUrl}/course`;
    return this.http.post<HttpResponse<CourseResponseDto>>(url, model);
  }

  updateCourse(model: FormData): Observable<HttpResponse<CourseResponseDto>> {
    const url: string = `${environment.apiUrl}/course`;
    return this.http.put<HttpResponse<CourseResponseDto>>(url, model);
  }

  updateCoursePath(
    model: Operation[]
  ): Observable<HttpResponse<CourseResponseDto>> {
    const url: string = `${environment.apiUrl}/course`;
    return this.http.patch<HttpResponse<CourseResponseDto>>(url, model);
  }

  updateCourseFile(
    model: FormData
  ): Observable<HttpResponse<CourseResponseDto>> {
    const url: string = `${environment.apiUrl}/course/update-course-file`;
    return this.http.put<HttpResponse<CourseResponseDto>>(url, model);
  }

  getAllCourse(
    query: PaginationQueryDto
  ): Observable<HttpResponse<{ records: CourseResponseDto[] }>> {
    const url: string = `${environment.apiUrl}/course/get-all?pageSize=${query.pageSize}&pageNumber=${query.pageNumber}&keyword=${query.keyword}`;
    return this.http.get<HttpResponse<{ records: CourseResponseDto[] }>>(url);
  }

  getCourse(courseId: string): Observable<HttpResponse<UpdateCourseDto>> {
    const url: string = `${environment.apiUrl}/course/${courseId}`;
    return this.http.get<HttpResponse<UpdateCourseDto>>(url);
  }

  deleteCourse(courseId: string): Observable<HttpResponse<CourseResponseDto>> {
    const url: string = `${environment.apiUrl}/course/${courseId}`;
    return this.http.delete<HttpResponse<CourseResponseDto>>(url);
  }
}
