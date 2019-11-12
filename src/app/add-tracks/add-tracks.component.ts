import { Component, OnInit } from '@angular/core';
import { ModuleService, Module } from '../service/moduleService';
import { TrackService,Track } from '../service/trackService'
@Component({
  selector: 'app-add-tracks',
  templateUrl: './add-tracks.component.html',
  styleUrls: ['./add-tracks.component.css']
})
export class AddTracksComponent implements OnInit {

  
  t : Track = new Track("","",0,[],[]);
  constructor(private tService: TrackService,private mService: ModuleService) { }

  ngOnInit() {
  }

  createTrack(): void {
    this.mService.getModules().subscribe(response=>this.handleSuccessfulResponse(response));
    
  }
  
  
  
  handleSuccessfulResponse(response){
   this.t.availableModules = response;
   this.tService.createTrack(this.t).subscribe(data => { alert("Track is created!"); });
  }
;


}
