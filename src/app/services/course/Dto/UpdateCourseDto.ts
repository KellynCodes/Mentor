import { MediaType } from '../../../data/enum/MediaType';

export interface UpdateCourseDto {
  id: string;

  name: string;

  description: string;

  price: number;

  category: string;

  mediaUrl: string;

  mediaType: MediaType;
}
