
import { Injectable } from '@angular/core';
import { IEmployee } from './../employee/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
  constructor(private _http: Http) {}
  getEmployeeList(): Observable<IEmployee[]> {
    return this._http
      .get(
        'https://api.mongolab.com/api/1/databases/newemployee/collections/employee?apiKey=DeaNTzYmHmf82cJ8asq_90AjcU-xGk71'
      ).map((response: Response) => <IEmployee[]>response.json())
       .catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
