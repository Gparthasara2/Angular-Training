import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../service/employeeService';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})



export class ViewComponent implements OnInit {

  constructor(private empService: EmployeeService) { }
  employees: Employee[];
  ngOnInit() {
    this.empService.getEmployees().subscribe(response => this.handSuccessfulResponse(response));
  }

  
  handSuccessfulResponse(response) {
    this.employees = response;
  }

  deleteEmployee(employee) {
    this.empService.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(v => v !== employee);
    })
  }
}
