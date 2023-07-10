import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProfile]'
})
export class ProfileDirective {
  @Input() appProfileColor: string = '#DF0024';
  @Input() roundedCircleText: string = '';
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyStyles();
    this.addText();
  }

  private applyStyles(): void {
    const element = this.elementRef.nativeElement;

    element.style.backgroundColor = this.appProfileColor;
    element.style.color = 'black';
    element.style.borderRadius = '50%';
    element.style.width = '40px'; 
    element.style.height = '40px';
    element.style.margin= '0px';

    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'justifyContent', 'center');
    this.renderer.setStyle(element, 'alignItems', 'center');
  }

  private addText(): void {
    const element = this.elementRef.nativeElement;

    const textNode = this.renderer.createText(this.roundedCircleText.slice(0,2));

    const textContainer = this.renderer.createElement('span');
    this.renderer.appendChild(textContainer, textNode);

    this.renderer.appendChild(element, textContainer);
  }
}
