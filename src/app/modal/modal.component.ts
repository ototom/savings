import { Component, Input} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() modalId:string = '';
  @Input() title:string = '';

  constructor(private modalService: ModalService){}

  onClickCloseButton() {
    this.modalService.removeModal(this.modalId);
  }

}
