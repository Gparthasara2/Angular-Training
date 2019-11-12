import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { ViewModulesComponent } from './view-modules/view-modules.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { AddTracksComponent } from './add-tracks/add-tracks.component';
import { ViewTracksComponent } from './view-tracks/view-tracks.component';
import { EditTrackComponent } from './edit-track/edit-track.component';
import { SelectModulesComponent } from './select-modules/select-modules.component';




const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'addemp', component: AddEmployeeComponent },
{ path: 'viewEmp', component: ViewComponent },
{ path: 'edit/:id', component: EditComponent },
{ path: 'addModule', component: AddModuleComponent },
{ path: 'viewModules', component: ViewModulesComponent },
{ path: 'editModule/:code', component: EditModuleComponent },
{ path: 'addTopics/:code', component: AddTopicsComponent },
{ path: 'addTrack', component: AddTracksComponent },
{path:'viewTracks',component: ViewTracksComponent},
{path:'editTrack/:code',component: EditTrackComponent},
{path:'selectModules/:code',component: SelectModulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
