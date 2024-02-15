import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory() {
    return window;
  },
});
export const DOCUMENT = new InjectionToken<Document>('Document', {
  providedIn: 'root',
  factory() {
    return document;
  },
});
export const LOCAL_STORAGE = new InjectionToken<any>('Storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
