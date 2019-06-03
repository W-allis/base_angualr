import { trigger, state, style, transition, animate } from "@angular/animations";

export const routeAnimation = trigger('route-animate', [
  state('open', style({
    'width': '100%'
  })),
  state('close', style({
    'width': '100%'
  })),
  transition('open => close', [
    animate('1s')
  ])
])