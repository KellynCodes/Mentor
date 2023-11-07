import { CourseEffect } from './../../modules/course/state/effect';
import { AuthEffect } from '../../modules/auth/state/auth/auth.effect';
import { SignUpEffect } from '../../modules/auth/state/signup/signup.effect';
import { FileEffect } from '../file/file.effect';
import { SharedEffect } from '../shared/shared.effect';

export const appEffects = [AuthEffect, SignUpEffect, CourseEffect, FileEffect, SharedEffect];
