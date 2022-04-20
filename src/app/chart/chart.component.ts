import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ObservableArray } from '@nativescript/core'
import { Country } from '../services/country';
import { DataService } from '../services/dataService';


@Component({
  selector: 'Chart',
  templateUrl: './chart.component.html',
  moduleId: module.id,
  providers: [DataService],
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private _categoricalSource: ObservableArray<Country>;
  constructor(private _dataService: DataService) {
    // Use the component constructor to inject providers.
  }
  get categoricalSource(): ObservableArray<Country> {
    return this._categoricalSource;
}

  ngOnInit(): void {
    this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
    }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}

