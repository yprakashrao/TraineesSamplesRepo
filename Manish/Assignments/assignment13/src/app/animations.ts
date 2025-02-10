import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 }), animate('1.2s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
