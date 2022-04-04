import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, EventData } from '@nativescript/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    public router:Router 
  ) { }

  ngOnInit() {
  }

  onItemTap(){
    this.router.navigate(['/home'])
  }

  onButtonTap(args: EventData): void { 
    console.log(args.eventName); 
    const button = <Button>args.object; 
    console.log(button.text); 
 } 

}
