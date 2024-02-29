import { User } from '../../user/Dto/user.dto';

export interface LoginSuccessDto {
  accessToken: string | null;
  refreshToken: string | null;
  expiryTimeStamp: number | null;
  user: User | null;
  isLoading?: boolean;
  successMessage?: string | null;
  errorMessage?: string | null;
  isSuccessful?: boolean;
}
