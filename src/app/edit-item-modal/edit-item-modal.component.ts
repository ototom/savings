import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
})
export class EditItemModalComponent implements OnInit {
  selectedItem:string=''
  defaultDescValue:string =''
  defaultValue:number =0
  id:string = "EDIT"
  
  constructor(private modalService: ModalService, private dataService: DataService) {}

ngOnInit() {
    this.selectedItem = <string>this.modalService.getSelectedItem("EDIT");

    const el = this.dataService.data.filter(el=> el.id===this.selectedItem)[0]
    this.defaultDescValue = el.desc;
    this.defaultValue = el.value;
  }

  onFormSubmit(form: NgForm){
    if(!form.valid) return;

    this.dataService.editItem(this.selectedItem, form.value.value, form.value.description)
    this.modalService.removeModal("EDIT");
  }
}
