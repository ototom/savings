import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ModalService } from '../modal/modal.service';
import {format} from 'date-fns'

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent {
  id: string = "ADD";
  defaultDescValue:string = `New entry added at ${format(new Date(), "PPPP; p")}`;

  constructor(private modalService: ModalService,private dataService: DataService) { }

  onFormSubmit(form:NgForm) {
    if(!form.valid) return;

    this.dataService.addItem(form.value.value, form.value.description);
    this.modalService.removeModal("ADD");
  }

}
