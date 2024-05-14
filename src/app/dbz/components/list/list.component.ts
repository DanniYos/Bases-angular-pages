import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }];



  public onDeleteCharacter(id ?: string) : void{
    if( !id ){ return }
    this.onDelete.emit(id);
  }

}
