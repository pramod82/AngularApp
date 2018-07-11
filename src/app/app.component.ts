import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader = 'Employee Details' ;

  classesToApplay = 'boldClass italicClass';

  applayBoldClass = false;

  visible = true;

  toggle() {
    
    return this.visible = !this.visible;
  }
  removeClass() {
   const classes = {
      boldClass : false,
      italicClass: true
    };
    return classes;
  }
}
