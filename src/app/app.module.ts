import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './ui/material/material.module';
import { NavHeaderComponent } from './ui/nav/nav-header/nav-header.component';
import { SidenavListComponent } from './ui/nav/sidenav-list/sidenav-list.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
