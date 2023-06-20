import { Pipe, PipeTransform } from '@angular/core';
import { Actions } from './game/game.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    actionList: Array<Actions>,
    valueFromSelect: string,
    arrlength: number
  ): Array<Actions> {
    if (valueFromSelect === 'asc') {
      actionList.sort((a, b) => {
        return a.actionSec - b.actionSec;
      });
      return actionList;
    }
    if (valueFromSelect === 'desc') {
      actionList.sort((a, b) => {
        return b.actionSec - a.actionSec;
      });
    }
    return actionList;
  }
}
