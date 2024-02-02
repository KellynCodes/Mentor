import { UserDto } from '../../user/Dto/user.dto';

export interface LoginSuccessDto {
  accessToken: string | null;
  refreshToken: string | null;
  expiryTimeStamp: number | null;
  user: UserDto | null;
  isLoading?: boolean;
  successMessage?: string | null;
  errorMessage?: string | null;
  isSuccessful?: boolean;
}
