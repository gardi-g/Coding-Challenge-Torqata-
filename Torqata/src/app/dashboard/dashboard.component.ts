import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { Data, RestService } from '../rest.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'height', 'rating'];
  //@ts-ignore
  dataSource = new MatTableDataSource(this.playersData);
  playersData: Data[] = [];
  //@ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ts-ignore
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private rs: RestService) {
    this.rs.getPlayers().subscribe(response => {
      console.log(response);
      this.playersData = response;
      this.dataSource = new MatTableDataSource(this.playersData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit(): void {}
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
