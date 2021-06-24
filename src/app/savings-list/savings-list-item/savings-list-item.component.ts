import { ModalService } from './../../modal/modal.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-savings-list-item',
  templateUrl: './savings-list-item.component.html',
})
export class SavingsListItemComponent {
  @Input() item = <{value: number, desc: string, id: string}>{};

  constructor(private modalService:ModalService) { }

  onClickDeleteButton(){
    this.modalService.addModal("DELETE", this.item.id)
  }
  onClickEditButton(){
    this.modalService.addModal("EDIT",this.item.id);
  }

}
