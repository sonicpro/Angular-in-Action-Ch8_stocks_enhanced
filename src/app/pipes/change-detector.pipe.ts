import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDetector',
  pure: false
})

// A demo that shows impure pipe overhead in the application that does not reload the data periodically.
export class ChangeDetectorPipe implements PipeTransform {
  count: number = 0;

  transform(value: any, args?: any): any {
    this.count++;
    console.log(`Component change detection executed ${this.count} times`);
    return value;
  }

}
