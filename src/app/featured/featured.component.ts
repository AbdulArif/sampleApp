import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Dialogs } from '@nativescript/core'

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  listPickerCountries: Array<string> = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
        "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
        "Italy", "Jamaica", "Romania", "Russia", "United States"];
    selectedListPickerIndex: number = 0;
    
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  displayAlertDialog() {
    // >> alert-dialog-code
    let options = {
        title: "Race selection",
        message: "Race chosen: Unicorn",
        okButtonText: "OK"
    };

    Dialogs.alert(options).then(() => {
        console.log("Race chosen!");
    });
    // << alert-dialog-code
}

}
