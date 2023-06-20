import { Pipe, PipeTransform } from '@angular/core';
import { HighScores } from './scores.service';


@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(data: Array<HighScores>, sortBy: string, order:number): Array<any> {
    if (sortBy === 'asc') {
      data.sort((a, b) => {
        return a.score - b.score;
      })
      return data;
    }
    if (sortBy === 'desc') {
      data.sort((a, b) => {
        return b.score - a.score;
      })
    }
    return data;
  }

}
