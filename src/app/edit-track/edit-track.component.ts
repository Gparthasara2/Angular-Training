import { Component, OnInit } from '@angular/core';
import { TrackService, Track } from '../service/trackService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.css']
})
export class EditTrackComponent implements OnInit {

  t: Track = new Track("","",0,[],[]);
  tracks: Track[];
  tCode: String;
  e:Track;
  constructor(private tService: TrackService, private route: ActivatedRoute) {  }

  
  ngOnInit() {
    this.tService.getTracks().subscribe(response => this.handSuccessfulResponse(response));
    this.tCode = this.route.snapshot.paramMap.get("code");
  }

    
     

  handSuccessfulResponse(response) {
    this.tracks = response;
  }

  editModule( e): void {
    this.tService.createTrack(e).subscribe(data => {  });
  };


}
