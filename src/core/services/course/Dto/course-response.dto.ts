import { UserDto } from '../../user/Dto/user.dto';

export interface CourseResponseDto {
  id: string;

  name: string;

  headerDescription: string;

  description: string;

  price: number;

  category: string;

  likes: number;

  image: string;

  subImage: string;

  media: MediaDto;

  topic: TopicDto;

  user: UserDto;
}

export interface MediaDto {
  youTubeVideoLink: string;
  mediaPdfLink: string;
  resourceLink: ResourceLinkDto;
}

export interface TopicDto {
  title: string;
  description: string;
}

export interface ResourceLinkDto {
  title: string;
  link: string;
}
