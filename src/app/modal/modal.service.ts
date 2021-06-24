import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ModalService {
    updateModalList = new Subject();
    modals:{id:string, selectedItemId?:string}[] = [];
    
    addModal(id: string, selectedItemId?:string) {
        this.modals.push({id, selectedItemId: selectedItemId || ''})
        this.updateModalList.next(this.modals);
    }
    removeModal(id: string) {
        this.modals = this.modals.filter((modal) => modal.id !== id)
        this.updateModalList.next(this.modals);
    }

    getSelectedItem(modalId:string) {
const modal = this.modals.filter(modal => modal.id===modalId);
const selectedItem = modal[0].selectedItemId;

        return selectedItem;
    }

}

