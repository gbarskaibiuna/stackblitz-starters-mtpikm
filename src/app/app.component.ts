import { Component, inject } from '@angular/core';
import { Employee, LookupGridService, State } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  service = inject(LookupGridService);
  dataSource: Employee[];

  states: State[];
  products: any[];
  events: Array<string> = [];

  constructor() {
    this.dataSource = this.service.getEmployees();
    this.states = this.service.getStates();
    this.products = this.service.getProducts();
  }

  logEvent(eventName: any) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

  onEditorPreparing(e: any) {
    if (e.dataField && e.editorName === 'dxSelectBox') {
      e.editorName = 'dxLookup';
      e.editorOptions.pageLoadMode = 'nextButton';
      e.editorOptions.nextButtonText = 'Next';
    }
  }
  name = 'Angular';
}
