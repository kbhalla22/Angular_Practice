import { Directive, Renderer2, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultColor: string ='transparent';
@Input() highlightColor: string='blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
