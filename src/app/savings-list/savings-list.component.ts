import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-savings-list',
  templateUrl: './savings-list.component.html',
})
export class SavingsListComponent implements OnInit, OnDestroy {
  data: {value: number, desc: string, id: string}[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;

    this.dataService.updateData.subscribe(updatedData => {
      this.data = <{value: number, desc: string, id: string}[]>updatedData;
    })
  }

  ngOnDestroy() {
    this.dataService.updateData.unsubscribe();
  }

}
