import { Role } from '../../../types/enum/role';

export interface SignUpDto {
  email: string;
  userName: string;
  password: string;
  profileImage: FormData;
  confirmPassword: string;
  role: Role;
}
