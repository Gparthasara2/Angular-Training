import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Module } from './moduleService';

export class Track {
  constructor(
    public code: string,
    public name: string,
    public duration: number,
    public availableModules: Module[],
    public trackModules: Module[],
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  

  constructor(private httpClient: HttpClient) { }
  
  
  getTracks() {
    console.log("test call");
    
    return this.httpClient.get<Track[]>('http://localhost:8079/tracks');
  }

  public deleteTrack(t) {
    return this.httpClient.delete<Track>("http://localhost:8079/tracks" + "/" + t.code);
  }

  public createTrack(t) {
    return this.httpClient.post<Track>("http://localhost:8079/tracks", t);
  }

  

  public editTrack(t){
    return this.httpClient.put<Track>("http://localhost:8079/tracks" + "/",t.id);
  }
}
