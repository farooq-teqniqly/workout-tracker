import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@teqniqly/material';
import { UiModule } from '@teqniqly/ui';
import { FeatureWorkoutLibraryModule } from '@teqniqly/feature/workout-library';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    FeatureWorkoutLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
