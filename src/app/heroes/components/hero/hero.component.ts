import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 50;


  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  get heroDescription() : string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(value: string): void{
    this.name = value;
  }

  changeHeroAge(value: number): void{
    this.age = value;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 50;
  }

}
