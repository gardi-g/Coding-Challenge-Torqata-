import { Component, OnInit } from '@angular/core';
import { Data,RestService } from '../rest.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    playersChartData: any = [];
    constructor(private rs: RestService) {Object.assign(this.playersChartData)}       
    private getData() {
        this.rs.getPlayers().subscribe((data: Data[]) => {
            const tempArray = [];
            var originalData = JSON.parse(JSON.stringify(data));
           for(let i = 0; i < originalData.length; i++) {
            tempArray.push({player_name: originalData[i].player_name, age: originalData[i].age, player_height:originalData[i].player_height,
            net_rating:originalData[i].net_rating});
            this.playersChartData = tempArray;
           }
           console.log(this.playersChartData);
          })
    }
    ngOnInit(): void {
        this.getData();
    }
}
