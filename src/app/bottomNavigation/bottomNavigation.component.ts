import { Component, OnInit } from '@angular/core';
import { SelectedIndexChangedEventData } from '@nativescript/core/ui/tab-view';

@Component({
  selector: 'app-bottomNavigation',
  templateUrl: './bottomNavigation.component.html',
  styleUrls: ['./bottomNavigation.component.css']
})
export class BottomNavigationComponent implements OnInit {
//   onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
//     let newIndex = args.newIndex;
// }
  constructor() { }

  ngOnInit() {
  }

}
