import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NotificationsService } from './notifications.service';

@Injectable({providedIn: 'root'})
export class DataService {
    data = <{value:number, desc:string, id:string}[]>[];
    total: number = 0;
    
    updateData = new Subject();

    constructor(private firestore: AngularFirestore, private notificationsService: NotificationsService){}

    fetchData() {
        this.firestore.collection('items').get().subscribe(docs => {
            docs.forEach((doc) => {
                const data = <{value: number,desc:string, id:string}>doc.data()
                this.data.push({id: doc.id, value: data.value, desc: data.desc})
            });
            this.updateData.next(this.data)
        })
    }
    
   getTotal() {
        if(this.data.length === 0) {
            return 0;
        }
        const total= this.data.reduce((prevValue, currentValue)=>{
            return prevValue+currentValue['value'];
        },0)

        this.total=total;

        return total;
    }

    addItem(value:number, desc:string) {
        this.firestore.collection('items').add({value, desc}).then(snap => {
            this.data.push({value, desc, id:snap.id})
            this.updateData.next(this.data)
            this.notificationsService.pushNotification("Item has been added")
        }).catch(error=> {
            this.notificationsService.pushNotification("An error occured")
            
        })
    }
    removeItem(id: string) {
        this.firestore.collection('items').doc(id).delete().then(()=>{
            this.data = this.data.filter(element => element.id !== id)
            this.updateData.next(this.data)
            this.notificationsService.pushNotification("Item has been removed")
        })
    }
    editItem(id: string, value: number, desc: string) {
        const index = this.data.findIndex(element => element.id === id);
        
        if(index === -1) return;
        
        this.firestore.collection('items').doc(id).set({value, desc}).then(()=>{
            this.data[index] = {id, value, desc};
            this.updateData.next(this.data)
            this.notificationsService.pushNotification("Item has been edited")
        })
    }
}