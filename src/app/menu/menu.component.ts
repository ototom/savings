import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private modalService: ModalService, private dataService: DataService) {}

  onClickAddButton() {
    this.modalService.addModal("ADD");
  }
  onClickClearButton() {
    this.dataService.clearAllItems();
  }

}
