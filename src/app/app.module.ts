import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { ViewModulesComponent } from './view-modules/view-modules.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { AddTracksComponent } from './add-tracks/add-tracks.component';
import { ViewTracksComponent } from './view-tracks/view-tracks.component';
import { EditTrackComponent } from './edit-track/edit-track.component';
import { SelectModulesComponent } from './select-modules/select-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ViewComponent,
    EditComponent,
    AddModuleComponent,
    EditModuleComponent,
    ViewModulesComponent,
    AddTopicsComponent,
    AddTracksComponent,
    ViewTracksComponent,
    EditTrackComponent,
    SelectModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
