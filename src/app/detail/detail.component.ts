import { Component, OnInit } from '@angular/core';
// import { phaserGameConfig } from './../../settings/phaser-game-config-specifications';
import { phaserGameConfig } from '../../game/settings/phaser-game-config-specifications';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private game: Phaser.Game;

  ngOnInit(): void {
    
    this.game = new Phaser.Game(phaserGameConfig);
    
  }

  constructor() {
    
  }

}
