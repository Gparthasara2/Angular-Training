import { Component, OnInit } from '@angular/core';
import { ModuleService, Module } from '../service/moduleService';

@Component({
  selector: 'app-view-modules',
  templateUrl: './view-modules.component.html',
  styleUrls: ['./view-modules.component.css']
})
export class ViewModulesComponent implements OnInit {

  constructor(private mService: ModuleService) { }
  modules: Module[];
  ngOnInit() {
    this.mService.getModules().subscribe(response => this.handSuccessfulResponse(response));
  }


  handSuccessfulResponse(response) {
    this.modules = response;
  }

  deleteModule(m) {
    this.mService.deleteModule(m).subscribe(data => {
      this.modules = this.modules.filter(v => v !== m);
    })
  }

}
