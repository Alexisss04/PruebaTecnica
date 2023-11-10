import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { get } from 'http';

@Component({
  selector: 'app-co2-chart',
  templateUrl: './co2-chart.component.html',
  styleUrls: ['./co2-chart.component.css'],
})
export class Co2ChartComponent implements OnInit {
  co2Datos: any[] | undefined;
  Paises: string[] | undefined;
  selectedCountry!: string;
  startYear!: number;
  endYear!: number;
  co2Data: any;
  lineChartLabels: any;
  lineChartData!: { data: any; label: string; }[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCO2Data().subscribe((data) => {
      this.co2Datos = data;
      this.updateChart();
    });

    this.dataService.getPaises().subscribe((data) => {
      this.Paises = data;
    });
  }

  updateChart(): void {
    if (!this.co2Data || !this.selectedCountry || !this.startYear || !this.endYear) {
      return;
    }

    // Filtra los datos por país, año de inicio y año final
    const filteredData = this.co2Data.filter(
      (item: { Country: string; Year: number; }) =>
        item.Country === this.selectedCountry &&
        item.Year >= this.startYear &&
        item.Year <= this.endYear
    );

    // Organiza los datos para el gráfico
    this.lineChartData = [
      {
        data: filteredData.map((item: { Value: any; }) => item.Value),
        label: `${this.selectedCountry} CO2 Emissions`,
      },
    ];

    this.lineChartLabels = filteredData.map((item: { Year: { toString: () => any; }; }) => item.Year.toString());
  }

}

