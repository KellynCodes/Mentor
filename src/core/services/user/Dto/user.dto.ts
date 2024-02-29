import { CourseResponseDto } from '../../course/Dto/course-response.dto';

export interface User {
  userId?: string;

  unique_name: string[];

  avatarUrl: string;

  email: string;

  role: string;
}

export interface UserResponseDto {
  user: UserDto;
  courses?: CourseResponseDto[];
}

export interface UserDto {
  userId: string;
  userEmail: string;
  userName: string;
  avatarUrl: string;
  bio: string;
}
