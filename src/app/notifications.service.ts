import { Injectable } from "@angular/core";
import { Subject, interval, Subscription } from "rxjs";
import { take} from "rxjs/operators";
import {v4} from 'uuid';

@Injectable({providedIn:"root"})
export class NotificationsService {
    notifications = <{message: string, id: string}[]>[];
    updateNotifications = new Subject<{message:string, id:string}[]>()
    timer!:Subscription

    pushNotification(message: string) {
        const id = v4()
        this.notifications.push({message, id})
        this.updateNotifications.next(this.notifications)
        
        this.timer = interval(5000).pipe(take(1)).subscribe(()=>{
            this.closeNotification(id);
        })
    }
    
    closeNotification(id: string) {
        this.notifications = this.notifications.filter(notify => notify.id !== id)
        this.updateNotifications.next(this.notifications)
    }
}