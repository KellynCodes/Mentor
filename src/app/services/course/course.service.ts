import { HttpResponse } from './../../data/Dto/shared/http.response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from '../../data/Dto/shared/request.query.dto';
import { CourseResponseDto } from './Dto/CourseResponseDto';
import { Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  createCourse(model: FormData): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.post<HttpResponse<CourseResponseDto>>('course', model);
  }

  updateCourse(model: FormData): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.put<HttpResponse<CourseResponseDto>>('course', model);
  }

  updateCoursePath(
    model: Operation[]
  ): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.patch<HttpResponse<CourseResponseDto>>('course', model);
  }

  updateCourseFile(
    model: FormData
  ): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.put<HttpResponse<CourseResponseDto>>(
      'course/update-course-file',
      model
    );
  }

  getAllCourse(
    query: PaginationQueryDto
  ): Observable<HttpResponse<{ records: CourseResponseDto[] }>> {
    const url: string = `course/get-all?pageSize=${query.pageSize}&pageNumber=${query.pageNumber}&keyword=${query.keyword}`;
    return this.http.get<HttpResponse<{ records: CourseResponseDto[] }>>(url);
  }

  getCourse(courseId: string): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.get<HttpResponse<CourseResponseDto>>(`course/${courseId}`);
  }

  deleteCourse(courseId: string): Observable<HttpResponse<CourseResponseDto>> {
    return this.http.delete<HttpResponse<CourseResponseDto>>(
      `course/${courseId}`
    );
  }
}
