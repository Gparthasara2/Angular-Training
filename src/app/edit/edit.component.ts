import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../service/employeeService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //   book: Books;
  //   bookId: number;
  //   constructor(private svc: DataService, private route: ActivatedRoute) { }

  //   ngOnInit() {
  //     this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
  //     this.svc.book.forEach(element => {
  //       if(element.id==this.bookId){
  //         this.book=element;
  //       }
  //     });
  //   }
  //  add(){
  //    this.svc.cart.push(this.svc.book[this.bookId]);
  //    console.log(this.svc.cart);
  //  }
  emp: Employee = new Employee("","","","");
  employees: Employee[];
  empid: String;
  e:Employee;
  constructor(private empService: EmployeeService, private route: ActivatedRoute) {  }

  
  ngOnInit() {
    this.empService.getEmployees().subscribe(response => this.handSuccessfulResponse(response));
    this.empid = this.route.snapshot.paramMap.get("id");
  }

    
     

  handSuccessfulResponse(response) {
    this.employees = response;
  }

  editEmployee( e): void {
    this.empService.createEmployee(e).subscribe(data => {  });
  };

}
