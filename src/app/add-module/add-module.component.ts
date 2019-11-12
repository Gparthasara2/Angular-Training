import { Component, OnInit } from '@angular/core';

import { ModuleService, Module } from '../service/moduleService';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  m : Module = new Module("","",0,[]);
  constructor(private mService: ModuleService) { }

  ngOnInit() {
  }

  createModule(): void {
    this.mService.createModule(this.m).subscribe(data => { alert("Module is created!"); });
  };

}
