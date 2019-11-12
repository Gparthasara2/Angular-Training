import { Component, OnInit } from '@angular/core';
import { TrackService, Track} from '../service/trackService';

@Component({
  selector: 'app-view-tracks',
  templateUrl: './view-tracks.component.html',
  styleUrls: ['./view-tracks.component.css']
})
export class ViewTracksComponent implements OnInit {

  constructor(private tService: TrackService) { }
  tracks: Track[];
  ngOnInit() {
    this.tService.getTracks().subscribe(response => this.handSuccessfulResponse(response));
  }


  handSuccessfulResponse(response) {
    this.tracks = response;
  }

  deleteTrack(t) {
    this.tService.deleteTrack(t).subscribe(data => {
      this.tracks = this.tracks.filter(v => v !== t);
    })
  }

}
