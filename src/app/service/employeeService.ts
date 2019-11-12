import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public id: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  
  
  getEmployees() {
    console.log("test call");
    
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.id);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }

  public editEmployee(employee){
    return this.httpClient.put<Employee>("http://localhost:8080/employees" + "/",employee.id);
  }
}
