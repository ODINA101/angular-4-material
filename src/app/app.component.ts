import { Component } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { Http } from '@angular/http';
import {MdToolbarModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData:Array<any>;

  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res)
  }
}
