import { Component, OnInit } from '@angular/core';

import { EmployeeService, Employee } from '../service/employeeService'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp: Employee = new Employee("", "", "", "");

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.empService.createEmployee(this.emp).subscribe(data => { alert("Employee is created!"); });
  };
}
