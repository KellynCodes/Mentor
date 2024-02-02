import { MediaDto, TopicDto } from './course-response.dto';

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
