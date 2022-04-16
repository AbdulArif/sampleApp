import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs'
import { SelectedIndexChangedEventData } from '@nativescript/core/ui/tab-view'

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']

})
export class SettingsComponent implements OnInit {
  onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
    let newIndex = args.newIndex;
}
 
  constructor() {
 
    }

  ngOnInit() {
   
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  ngModel(){
    
  }
}
