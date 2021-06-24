import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class DataService {
    data = <{value:number, desc:string, id:string}[]>[]
    
    updateData = new Subject()
    
    get total() {
        if(this.data.length === 0) {
            return 0;
        }
        return this.data.reduce((prevValue, currentValue)=>{
            return prevValue+currentValue['value'];
        },0)
    }
    
    clearAllItems() {
        this.data = []
        this.updateData.next(this.data)
    }

    addItem(value:number, desc:string) {
        const id= Math.random().toString()

        this.data.push({value, desc, id})
        this.updateData.next(this.data)
    }
    removeItem(id: string) {
        this.data = this.data.filter(element => element.id !== id)
        this.updateData.next(this.data)
    }
    editItem(id: string, value: number, desc: string) {
        const index = this.data.findIndex(element => element.id === id);
        this.data[index] = {id, value, desc};
        this.updateData.next(this.data)
    }
}