
import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[gaReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  private obs?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    if (!node) return;
    node.classList.add('reveal');
    node.style.transitionDelay = `${this.revealDelay}ms`;
    this.obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('is-in');
            this.obs?.unobserve(node);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    this.obs.observe(node);
  }

  ngOnDestroy(): void {
    this.obs?.disconnect();
  }
}
