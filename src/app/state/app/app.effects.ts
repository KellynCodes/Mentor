import { AuthEffect } from '../../auth/state/auth/auth.effect';
import { SignUpEffect } from '../../auth/state/signup/signup.effect';
import { FileEffect } from '../file/file.effect';

export const appEffects = [AuthEffect, FileEffect, SignUpEffect];
