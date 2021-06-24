import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  savingsInTotal:number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.savingsInTotal = this.dataService.total;

    this.dataService.updateData.subscribe(()=>{
      this.savingsInTotal =this.dataService.total
    })
  }

}
