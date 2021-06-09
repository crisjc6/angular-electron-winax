import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSceneIdsStrings } from '../../game/settings/game-constants-strings/game-scene-ids-string';
// import { phaserGameConfig } from './../../settings/phaser-game-config-specifications';
import { phaserGameConfig } from '../../game/settings/phaser-game-config-specifications';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ngOnInit(): void {
    
    // this.game = new Phaser.Game(phaserGameConfig);
    
  }

  constructor(private router: Router) {
    
  }

  goPlaces() {
    this.router.navigate(['/']);
    // phaserGameObject.game.scene.start(GameSceneIdsStrings.MAIN_SCENE_ID);
  }

}
