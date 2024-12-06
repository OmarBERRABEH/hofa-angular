import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { SearchBarComponent } from '@/commons/components/search-bar/search-bar.component';
import { DashboardFacade } from '../../store/dashboard.facade';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, SearchBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export default class DashboardComponent implements OnInit {
  dashboardFacade = inject(DashboardFacade);
  dashboardData = this.dashboardFacade.selectData;

  ngOnInit() {
    this.dashboardFacade.load();
  }

  onSearch(term: string) {
    console.log('Search term:', term);
  }
}
