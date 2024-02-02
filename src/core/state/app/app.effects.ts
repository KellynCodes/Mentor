import { FileEffect } from '../file/file.effect';
import { SharedEffect } from '../shared/shared.effect';
import { ContactEffect } from '../page/effect';
import { AuthEffect } from '../auth/auth.effect';
import { CourseEffect } from '../course/effect';

export const appEffects = [
  AuthEffect,
  CourseEffect,
  ContactEffect,
  FileEffect,
  SharedEffect,
];
