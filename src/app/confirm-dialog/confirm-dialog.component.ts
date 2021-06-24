import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  selectedItem:string='';

  constructor(private modalService: ModalService, private dataService: DataService) { }

  ngOnInit() {
    this.selectedItem = <string>this.modalService.getSelectedItem("DELETE");
  }

  onClickCloseButton() {
    this.modalService.removeModal("DELETE");
  }

  onClickDeleteButton() {
    this.dataService.removeItem(this.selectedItem);
    this.modalService.removeModal("DELETE");
  }

}
