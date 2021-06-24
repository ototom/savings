import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit, OnDestroy {
  savingsInTotal:number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.savingsInTotal = <number>this.dataService.total;

    this.dataService.updateData.subscribe(()=>{
      this.savingsInTotal =<number>this.dataService.getTotal()
    })
  }

  ngOnDestroy() {
    this.dataService.updateData.unsubscribe()
  }

}
