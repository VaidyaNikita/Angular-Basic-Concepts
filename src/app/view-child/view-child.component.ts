import { DemoChildComponent } from './../demo-child/demo-child.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  
})
export class ViewChildComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    // console.log(this.dateOfBirth)
  }

  ngOnInit(): void {
    
  }

  

 @ViewChild('dobInput') dateOfBirth!: ElementRef;
 @ViewChild('ageInput') age!: ElementRef;
 @ViewChild(DemoChildComponent,{static:true}) demoComp! : DemoChildComponent

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age
    // console.log(birthYear)
  }
}
