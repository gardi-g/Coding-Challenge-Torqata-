import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
export interface NbaData {
  name: string;
  age: number;
  height: number;
  rating: number;
}
const NBA_DATA: NbaData[] = [
  { name: 'Michael Jordan', age: 34, height: 198.12, rating: 13.4 },
  { name: 'Lebron James', age: 19, height: 203.2, rating: -2.6 },
  { name: 'Kyle Korver', age: 23, height: 200.66, rating: -8.9},
  { name: 'Kyrie Irving', age: 20, height: 190.5, rating: -5.6 },
  { name: 'Joel Embiid', age: 23, height: 213.36, rating: 3.2 },
  { name: 'Joe Ingles', age: 29, height: 203.2, rating: 4.8 },
  { name: 'Kyle Lowry', age: 32, height: 182.88, rating: 7.6 },
  { name: 'Jimmy Buttler', age: 29, height: 203.2, rating: 3.6 },
  { name: 'Klay Thompson', age: 23, height: 200.66, rating: 1.8},
  { name: 'Stephen Curry', age: 26, height: 190.5, rating: 9.4 }
]
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource<NbaData>(NBA_DATA);
  displayedColumns: string[] = ['name', 'age', 'height', 'rating'];
  //@ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  constructor() {}

  ngOnInit(): void {
    //@ts-ignore
    this.dataSource.paginator = this.paginator;
    //@ts-ignore
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sortData(sort: Sort) {
    // @ts-ignore
    const data = this.scenarios.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }
  }
}
