import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.scss']
})
export class EmployeeCountComponent implements OnInit {
  @Input() gender;


  selectedRadioButtonValue = 'All';
  @Output() countRadioButtonSelectionChanged = new EventEmitter();
  @Output() notify = new EventEmitter<string>();

  onClick(): void {
    this.notify.emit('Message From Child');
  }

  onRedioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);

  }
  constructor() { }

  ngOnInit() {
    
  }

}
