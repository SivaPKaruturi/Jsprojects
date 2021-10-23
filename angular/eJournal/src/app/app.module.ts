import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreMaterialModule } from "../app/core-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { provideConfig } from "./interceptors/socialLoginConfig";
import { FullCalendarModule } from "@fullcalendar/angular";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

import * as views from "./views/index";

FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    views.HomeComponent,
    views.UserDashboardComponent,
    views.RegisterComponent,
    views.GratitudeComponent,
    views.remindersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    FullCalendarModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
