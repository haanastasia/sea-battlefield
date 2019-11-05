import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sea-battlefield',
  templateUrl: './sea-battlefield.component.html',
  styleUrls: ['./sea-battlefield.component.scss']
})
export class SeaBattlefieldComponent {
  public player: string = 'Player'
  public enemy: string = 'PC'

  constructor(private loginService: LoginService) {
    this.player = this.loginService.getName();
  }

}
