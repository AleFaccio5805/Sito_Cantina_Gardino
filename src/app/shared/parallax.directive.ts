
import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Directive({
  selector: '[gaParallax]',
  standalone: true
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  @Input() parallaxScale = 1.6;
  @Input() parallaxDelay = 0.5;
  private instance: any = null;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    const img = this.el.nativeElement;
    if (!img) return;
    if (window.innerWidth < 760) return;

    const init = () => {
      window.setTimeout(() => {
        try {
          this.instance = new simpleParallax(img, {
            scale: this.parallaxScale,
            orientation: 'down',
            overflow: false,
            delay: this.parallaxDelay,
            transition: 'cubic-bezier(0.4,0,0.2,1)'
          });
        } catch (e) {
          /* parallax opzionale */
        }
      }, 120);
    };

    if (img.complete) init();
    else img.addEventListener('load', init, { once: true });
  }

  ngOnDestroy(): void {
    try {
      this.instance?.destroy();
    } catch (e) {
      /* noop */
    }
  }
}
