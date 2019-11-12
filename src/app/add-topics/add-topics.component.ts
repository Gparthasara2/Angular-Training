import { Component, OnInit } from '@angular/core';
import { ModuleService, Module } from '../service/moduleService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit {

  m: Module = new Module("", "", 0, []);
  modules: Module[];
  mCode: String;
  e: Module;
  topic1: String;
  topic2: String;
  topic3: String;
  constructor(private mService: ModuleService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.mService.getModules().subscribe(response => this.handSuccessfulResponse(response));
    this.mCode = this.route.snapshot.paramMap.get("code");
  }

  handSuccessfulResponse(response) {
    this.modules = response;
  }

  addTopic(m, topic1,topic2,topic3) {
    m.topics.push(topic1);
    m.topics.push(topic2);
    m.topics.push(topic3);
    
    this.mService.createModule(m).subscribe(data => { });
  }

}
