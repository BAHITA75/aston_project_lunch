import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './_page404/page404.component';
import { TokenInterceptorProvider } from './_services/auth/token.interceptor';
import { ComponentsModule } from './_components/components.module'

@NgModule({
    declarations: [
        AppComponent,
        Page404Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ComponentsModule,
    ],
    providers: [TokenInterceptorProvider, ComponentsModule,],
    bootstrap: [AppComponent],
})
export class AppModule {}
