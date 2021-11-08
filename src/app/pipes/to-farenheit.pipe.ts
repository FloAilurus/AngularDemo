import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return this.faireQch(value);
  }

  private faireQch(value: number): number {
    return (value * (9/5)) + 32;
  }

}
