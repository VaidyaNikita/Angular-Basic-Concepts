import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {


  sayHello(inputEl:HTMLInputElement){
    alert("hello " + inputEl.value)
    console.log(inputEl)
  }
}
