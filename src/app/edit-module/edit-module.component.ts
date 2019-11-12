import { Component, OnInit } from '@angular/core';
import { ModuleService, Module } from '../service/moduleService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  m: Module = new Module("","",0,[]);
  modules: Module[];
  mCode: String;
  e:Module;
  constructor(private mService: ModuleService, private route: ActivatedRoute) {  }

  
  ngOnInit() {
    this.mService.getModules().subscribe(response => this.handSuccessfulResponse(response));
    this.mCode = this.route.snapshot.paramMap.get("code");
  }

    
     

  handSuccessfulResponse(response) {
    this.modules = response;
  }

  editModule( e): void {
    this.mService.createModule(e).subscribe(data => {  });
  };


}
