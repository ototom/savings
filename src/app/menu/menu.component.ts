import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-menu',
  template: `
    <h4>Manage your list</h4>
    <div class="d-grid gap-2">
      <button class="btn btn-success" (click)="onClickAddButton()">Add new</button>
    </div>
  `,
})
export class MenuComponent {

  constructor(private modalService: ModalService, private dataService: DataService) {}

  onClickAddButton() {
    this.modalService.addModal("ADD");
  }

}
