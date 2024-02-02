// import { MediaType } from '../../../data/enum/MediaType';

export interface CourseDto {
  name: string;
  price: number;
  description: string;
  createdBy: string;
  category: string;
  courseFile: File;
  // fileType: MediaType;
}
