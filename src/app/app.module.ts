import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from './components/bar-chart/bar-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
