import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Person } from "../services/person";


@Component({
  selector: 'BottomNav',
  templateUrl: './bottomNav.component.html',
  styleUrls: ['./bottomNav.component.css']
})
export class BottomNavComponent implements OnInit {
  private _person: Person;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
  }
  get person(): Person {
    return this._person;
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}

