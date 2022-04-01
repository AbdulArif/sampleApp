import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-flexBox',
  templateUrl: './flexBox.component.html',
  styleUrls: ['./flexBox.component.css']
})
export class FlexBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}
