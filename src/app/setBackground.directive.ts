import{ Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[SetBackground]'
})

export class SetBackGround implements OnInit{

    constructor( private elf:ElementRef){}
    ngOnInit(): void {
        this.elf.nativeElement.style.backgroundColor = 'orange';
        this.elf.nativeElement.style.padding = '70px';
        this.elf.nativeElement.style.color = 'brown';
    }

}