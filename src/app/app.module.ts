import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule, ModalModule } from 'ng-uikit-pro-standard';
import * as AppRoutingModule from './app-routing.module';
import { BidiModule } from '@angular/cdk/bidi';
import { SharedModule } from './shared.module';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppRoutingModule.declarations
  ],
  imports: [
    //SocketIoModule.forRoot(config),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule.AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    BidiModule,
    CommonModule,
  ],
  entryComponents: [],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppRoutingModule.MainComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { hell = 'my god how is this possible'; }

