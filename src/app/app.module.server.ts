import { NgModule } from '@angular/core';
import { ServerModule, provideServerRendering } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [provideServerRendering(), provideClientHydration()],
})
export class AppServerModule {}
