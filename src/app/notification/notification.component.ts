import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [ngClass]="{fadeout:displayNotification}" class="notification-div">
    <p>This website uses coockies to provide better user experience.</p>
    <div class="close"><button class="btn"  (click)="close()">X</button></div>
  </div>`,
  styles: [".notification-div{padding:10px 20px; margin:10px 0px; background-color:orange; text-align:center}","p{font-size:20px;}",".close{float:right; margin-top:-47px;font-size:25px}",
  ".fadeout{visibility:hidden; opacity:0; transition: visibility 0s 2s, opacity 2s  linear}"]
})
export class NotificationComponent {

  displayNotification:boolean = false;

  close(){
    this.displayNotification = true
  }
}
