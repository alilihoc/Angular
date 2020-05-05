import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmStars'
})
export class FilmStarsPipe implements PipeTransform {

  transform(rate: any): any {
    let stars = "";
    for(let i = 0 ; i < rate ; i++){
       stars += '<i class="fa fa-star"></i>';
    }
    return stars
  }

}


