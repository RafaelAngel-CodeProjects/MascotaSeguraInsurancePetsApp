import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { v4 as uuidv4 } from 'uuid';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],

  bootstrap: [AppComponent],
})
export class AppServerModule {}
