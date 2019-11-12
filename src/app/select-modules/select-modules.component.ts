import { Component, OnInit } from '@angular/core';
import { Track, TrackService } from '../service/trackService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-modules',
  templateUrl: './select-modules.component.html',
  styleUrls: ['./select-modules.component.css']
})
export class SelectModulesComponent implements OnInit {

  t: Track = new Track("","",0,[],[])
  tracks: Track[];
  tCode: String;
  constructor(private tService: TrackService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.tService.getTracks().subscribe(response=>this.handleSuccessfulResponse(response));
    this.tCode = this.route.snapshot.paramMap.get("code");
  }

  handleSuccessfulResponse(response){
    this.tracks = response;
  }

}
