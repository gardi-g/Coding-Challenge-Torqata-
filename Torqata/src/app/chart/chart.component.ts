
import { Component, OnInit } from '@angular/core';
import { Data,RestService } from '../rest.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    //@ts-ignore
    playersChartData: Data[];
    constructor(private rs: RestService) { this.rs.getPlayers().subscribe(response => {
        console.log(response)
        //this.playersChartData = response
        for (const i of response) {
            this.playersChartData.push(i);
        }
        this.playersChartData = [...this.playersChartData];
    })
}
    ngOnInit(): void {}
}