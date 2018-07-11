import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { IEmployee } from './../employee';
import { IEmployeeList } from './employee-list';



@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    empCount: any;
    constructor (private employeeService: EmployeeService) {

    }

    selectedEmployeeCountRadioButton = 'All';
    showMessage: string;
    statusMsg = 'Loading Data. Please wait...';
    ngOnInit() {
      this.employeeService.getEmployeeList().subscribe((employeeData) => {

        this.employees = employeeData;
        this.empCount = {
          all: this.employees.length,
          male: this.employees.filter(e => e.gender === 'Male').length,
          female: this.employees.filter(e => e.gender === 'Female').length
        };
      },
      (error) => {
        this.statusMsg = 'Problem with the server. Please try again after some time';
      });
    }
    
    onEmployeeCountRadioButtonChange(ev) {
      this.selectedEmployeeCountRadioButton = ev;
    }

    onNotifyClicked(message: string) {
      this.showMessage = message;
    }




    trakByEmployee(index: number, employee: any): string {
      return employee.code;
    }
}
