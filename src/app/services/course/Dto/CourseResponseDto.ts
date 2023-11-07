import { MediaType } from '../../../data/enum/MediaType';
import { UserResponseDto } from '../../user/Dto/user.dto';

export interface CourseResponseDto {
  id: string;

  name: string;

  description: string;

  price: number;

  category: string;

  likes: number;

  mediaUrl: string;

  mediaType: MediaType;

  user: UserResponseDto;
}
