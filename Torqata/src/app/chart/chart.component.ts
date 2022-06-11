import { Component, OnInit } from '@angular/core';
import { Data,RestService } from '../rest.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
    playersChartData: any = [];
    constructor(private rs: RestService) {Object.assign(this.playersChartData)}       
    private getData() {
        this.rs.getPlayers().subscribe((data: Data[]) => {
            const tempArray = [];
           for(let i = 0; i < data.length; i++) {
            tempArray.push({player_name: data[i].player_name, age: data[i].age, player_height:data[i].player_height,
            net_rating:data[i].net_rating});
            this.playersChartData = tempArray;
           }
           console.log(this.playersChartData);
          })
    }
    ngOnInit(): void {
        this.getData();
    }
}
