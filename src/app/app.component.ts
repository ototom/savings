import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  modals:{id:string, selectedItemId?:string}[]=[]

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modals = this.modalService.modals;

    this.modalService.updateModalList.subscribe((updatedList)=>{
      this.modals = <{id:string, selectedItemId?:string}[]>updatedList;
    })
  }

  getIsModalActive(type:string) {
    return this.modals.findIndex((modal:{id:string, selectedItemId?:string})=>modal.id===type) !== -1
  }

  ngOnDestroy() {
    this.modalService.updateModalList.unsubscribe()
  }
}
