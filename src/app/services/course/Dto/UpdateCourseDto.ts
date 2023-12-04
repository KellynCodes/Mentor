import { MediaDto, TopicDto } from './CourseResponseDto';

export interface UpdateCourseDto {
  id: string;

  name: string;

  description: string;

  price: number;

  category: string;

  mediaUrl: string;

  media: MediaDto;

  Topics: TopicDto;
}
