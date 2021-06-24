import { Component, Input } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() id: string = 'xxx';
  @Input() message:string ='111';

  constructor(private notificationsService: NotificationsService) { 
  }

  onClickCloseButton() {
    this.notificationsService.closeNotification(this.id);
  }

}
