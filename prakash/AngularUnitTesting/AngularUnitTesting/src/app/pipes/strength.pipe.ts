import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): any {
    if (value < 10) {
      return value + '(weak)';
    } else if (value >= 10 && value < 20) {
      return value + '(good)';
    } else if (value >= 20) {
      return value + '(strong)';
    }
  }
}
