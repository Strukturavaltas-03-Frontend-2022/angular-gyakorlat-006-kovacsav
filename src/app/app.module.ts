import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventsListComponent } from './page/events-list/events-list.component';

import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
