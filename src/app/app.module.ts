import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SelectorsattrComponent } from './selectorsattr/selectorsattr.component';
import { SelectorsclassComponent } from './selectorsclass/selectorsclass.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SelectorsattrComponent,
    SelectorsclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
