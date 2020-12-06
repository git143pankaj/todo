import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { AddworkComponent } from './component/addwork/addwork.component';
import { EditworkComponent } from './component/editwork/editwork.component';
import { WorklistComponent } from './component/worklist/worklist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddworkComponent,
    EditworkComponent,
    WorklistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),  
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
