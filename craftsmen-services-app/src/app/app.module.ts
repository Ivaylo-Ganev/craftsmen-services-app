import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { UserModule } from './user/user.module';
import { FeatureModule } from './feature/feature.module';
import { ApiInterceptorProvider } from './api.interceptor';
import { AuthInterceptorProvider } from './auth.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    FeatureModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ApiInterceptorProvider, AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
