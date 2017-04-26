import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return {
    right : slideToRight,
    left : slideToLeft,
    bottom : slideToBottom,
    top : slideToTop

  };
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out 2s', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out 2s', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%', height:'100%'}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out 2s', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%', height:'100%'}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)', zIndex: '20'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out 2s', style({transform: 'translateY(-100%)', zIndex: '20'}))
    ])
  ]);
}