import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements
OnChanges,
DoCheck,
OnInit,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
AfterContentChecked
 {
  @Input() perantData;
  @Output() childEvent = new EventEmitter();

  onChange(value: string) {
    this.childEvent.emit(value);
  }
  constructor() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    
    // for (let propertyName in changes) {
    //   let change = changes [propertyName];
    //   let current = JSON.stringify(change.currentValue);
    //   let previous = JSON.stringify(change.previousValue)
    //   console.log(propertyName + 'current Value' + current + 'previous Value' + previous);
    // }
  }

  ngOnInit() {
    
  }
  ngDoCheck() {
    
  }
  ngAfterContentInit() {
    
  }
  ngAfterContentChecked() {
    
  }
  ngAfterViewInit() {
   
  }
  ngAfterViewChecked() {
    
  }

}
