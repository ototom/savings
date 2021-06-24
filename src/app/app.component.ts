import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ModalService } from './modal/modal.service';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  modals:{id:string, selectedItemId?:string}[]=[]
  notifications:{id:string, message: string}[] =[]

  constructor(private modalService: ModalService, private dataService: DataService, private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.modals = this.modalService.modals;
    this.notifications = this.notificationsService.notifications;

    this.modalService.updateModalList.subscribe((updatedList)=>{
      this.modals = <{id:string, selectedItemId?:string}[]>updatedList;
    })

    this.notificationsService.updateNotifications.subscribe(updatedNotifications=>{
      this.notifications = <{id: string, message: string}[]>updatedNotifications;
    })

    this.dataService.fetchData();
  }

  getIsModalActive(type:string) {
    return this.modals.findIndex((modal:{id:string, selectedItemId?:string})=>modal.id===type) !== -1
  }

  ngOnDestroy() {
    this.modalService.updateModalList.unsubscribe()
    this.notificationsService.updateNotifications.unsubscribe()
  }
}
