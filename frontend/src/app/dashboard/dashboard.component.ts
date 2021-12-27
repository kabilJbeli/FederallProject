import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'myHighchart';

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
    },
    legend: { enabled: false },

    credits: {
      enabled: false,
    },
    title: {
      text: 'Student Per Major',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: false,
        },

        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Major share',
        data: [
          {
            name: 'ISIL',
            y: 45,
          },
          {
            name: 'ISIL',
            y: 26,
          },
          {
            name: 'IT FINANCE',
            y: 26.8,
          },
        ],
      },
    ],
  };

  barChartOptions: Highcharts.Options = {
    title: {
      text: 'Student Per Major',
    },
    legend: { enabled: false },

    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['ISIL', 'BDBI', 'IT Finance'],
    },
    yAxis: {
      title: {
        text: 'Number Of Students',
      },
    },
    series: [
      {
        data: [20, 32, 3],
        type: 'bar',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
