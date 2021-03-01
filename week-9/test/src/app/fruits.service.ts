import { Injectable } from '@angular/core';
import { IFruit } from './fruit.interface';
@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  fruits: Array<IFruit>;


  constructor() {
    /**
     * Creates a new array of fruit objects
     */
    this.fruits = [
      {
        id: 100,
        name: 'Apple',
      },
      {
        id: 101,
        name: 'Pear'
      },
      {
        id: 102,
        name: 'Orange'
      },
      {
        id: 103,
        name: 'Grade'
      }
    ]
   }
}
