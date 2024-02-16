import { HandleGlobalError } from './../core/extension/handle.error';
import { TemplatePageTitleStrategy } from '../core/extension/title.strategy';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ErrorHandler,
  NgModule,
  isDevMode,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from '../core/state/app/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects } from '../core/state/app/app.effects';
import { CustomSerializer } from '../core/services/router/custom.serializer';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  LocationStrategy,
  PathLocationStrategy,
  provideCloudinaryLoader,
} from '@angular/common';
import { RequestInterceptor } from '../core/extension/http.interceptor';
import { TitleStrategy } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SharedModule } from './modules/components/shared.module';
import { NgOptimizedImage, APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { provideToastr } from 'ngx-toastr';

register();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    // { provide: ErrorHandler, useClass: HandleGlobalError },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    provideClientHydration(),
    provideHttpClient(withFetch()),
    // provideCloudinaryLoader('http://res.cloudinary.com'),
    provideToastr({
      maxOpened: 8,
      autoDismiss: true,
      timeOut: 3000,
      positionClass: 'toast-top-center',
    }),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
