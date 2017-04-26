import {
  Directive,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[background]',
})

export class BackgroundDirective implements OnInit {

  constructor (private $el: ElementRef) {

  }

  public ngOnInit () {
    const $elem = this.$el.nativeElement;
    const src = $elem.dataset.src;

    $elem.style.backgroundImage =  `url(${ src })`;
  }
}
