import { Component } from '@angular/core';
import { Observable, timer } from "rxjs";
import { tipsInterface, TipsService } from "../../services/tips.service";
import { filter, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-game-tips',
  templateUrl: './game-tips.component.html',
  styleUrls: ['./game-tips.component.scss']
})
export class GameTipsComponent {
  private number: number;
  public header: string;
  public text: string;
  
  constructor(private tipsSvc: TipsService){

  }
 
  ngOnInit() {
    timer(0, 5000).subscribe(() => {
      this.tipsSvc.getTips().subscribe(helpers => {
        this.number = Math.floor(Math.random() * Math.floor(helpers.length));
        return this.header = helpers[this.number].header, this.text = helpers[this.number].text;
      });
    });
  }

  /*
  * 1. Реализовать фильтр. Чтоб каждые 5-сек выводилась радномная подсказка с JSON файла.
  * 2. Сделать анимацию при отрисовке подсказки.
  * 3. Если будет время заняться отдавать подсказку с сервера.
  **/

}
