import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective, ThemeService } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'learnal-chart',
  template: `
    <canvas
      style="height: 22rem; width: 100%"
      baseChart
      [data]="barChartData"
      [options]="barChartOptions"
      type="bar"
    >
    </canvas>
  `,
})
export class ChartComponent {
  private _selectedTheme: Theme = 'light-theme';
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public get selectedTheme() {
    return this._selectedTheme;
  }
  public set selectedTheme(value) {
    this._selectedTheme = value;
    let overrides: any;
    if (this.selectedTheme === 'dark-theme') {
      overrides = {
        scales: {
          x: [
            {
              ticks: { fontColor: 'white' },
              gridLines: { color: 'rgba(255,255,255,0.1)' },
            },
          ],
          y: [
            {
              ticks: { fontColor: 'white' },
              gridLines: { color: 'rgba(255,255,255,0.1)' },
            },
          ],
        },
      };
    } else {
      overrides = {
        scales: undefined,
      };
    }

    this.themeService.setColorschemesOptions(overrides);
  }

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Finished courses' },
      { data: [28, 48, 40, 19, 86], label: 'Unfinished courses' },
    ],
  };

  constructor(private themeService: ThemeService) {}

  setCurrentTheme(theme: Theme) {
    this.selectedTheme = theme;
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
}
