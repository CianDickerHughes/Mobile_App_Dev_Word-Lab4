import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  starClick:boolean = true;
  count:number = 0;

  onButtonClick() {
    this.count++;
  }

  onImgClick() {

    this.starClick = !this.starClick;

    /*if(this.starClick === false) {
      this.starClick = true
    }
    else {
      this.starClick = false;
    } */
  }
}