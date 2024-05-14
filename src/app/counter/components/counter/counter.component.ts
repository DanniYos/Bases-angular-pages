import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<h1> Counter </h1>

  <p>Counter: {{counter}}</p>
  <button (click)="increaseBy(1)"> +1 </button>
  <button (click)="increaseBy(-1)"> -1 </button>
  <button (click)="resetCounter()"> Reset </button>

  `,
})
export class CouterComponent{
  public title: string = 'Hello World';
  public counter: number = 10;


  increaseBy(value: number): void{
    this.counter +=value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
